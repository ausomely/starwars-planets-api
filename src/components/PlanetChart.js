/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const PlanetChart = () => {
    const [chartData, setChartData] = useState({});

    const renderChart = (data) => {
        let planetNames = [];
        let populations = [];
        for (const planetObj of Object.values(data)) {
            planetNames.push(planetObj.name);
            populations.push(parseInt(planetObj.population));
        }

    console.log('Planet Names: ', planetNames, 'Population before Conversion: ', populations);
    
        setChartData({
            labels: planetNames,
            datasets: [
                {
                    label: 'Population',
                    data: populations,
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 2,
                }
            ]
        });
    };

    const fetchPlanetData = () => {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        let planetData = [];

        useEffect(async () => {
            let currentPage = 0;
            let morePages = true;
            while (morePages) {
                currentPage++;
                const response = await fetch(`https://swapi.dev/api/planets/?page=${currentPage}`);
                const data = await response.json();
                planetData.push(data.results);
                if (data.next === null) morePages = false;
            }

            const sortedPlanets = planetData.flat().sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
            
            setData(sortedPlanets);
            setLoading(false);
            renderChart(sortedPlanets);
        }, []);

        return {data, loading};
    }

    const {data, loading} = fetchPlanetData();

    return (
        <div>
            {loading ? <div> ...loading </div> : Object.values(data).map((planet, planetIdx) => (
                <p key={planetIdx}>{planet.name} {planet.population}</p>
                ))
            }
            <div>
                <Bar 
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
                            position: 'bottom',
                        },
                        title: {
                            display: true,
                            text: 'Planet Population in Star Wars',
                            font : {
                                size: 40,
                            }
                        },
                        subtitle: {
                            display: true,
                            text: 'Source: Star Wars API, Wookieepedia',
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            type: 'logarithmic',
                            min: 100,
                            max: 1000000000000,
                            ticks: {
                                callback: function(value, idx, values) {
                                    if (value === 1000000000000) return '1T';
                                    if (value === 100000000000) return '100B';
                                    if (value === 10000000000) return '10B';
                                    if (value === 1000000000) return '1B';
                                    if (value === 100000000) return '100M';
                                    if (value === 10000000) return '10M';
                                    if (value === 1000000) return '1M';
                                    if (value === 100000) return '100K';
                                    if (value === 10000) return '10K';
                                    if (value === 1000) return '1K';
                                    if (value === 100) return '0';
                                    return null;
                                }
                            },
                            grid: {
                                display: false
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Planet Name'
                            },
                            grid: {
                                display: false
                            }
                        }
                    }
                }} 
                />
            </div>
        </div>
    )
}

export default PlanetChart
