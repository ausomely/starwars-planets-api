/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Bar } from 'react-chartjs-2';

const PlanetChart = ({ loading, chartData }) => {


    return (
        <div>
            {/* {loading ? <div> ...loading </div> : Object.values(data).map((planet, planetIdx) => (
                <p key={planetIdx}>{planet.name} {planet.population}</p>
                ))
            } */}
            <div> {loading ? <div>...loading </div> :
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
                                display: true
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
                />}
            </div>
        </div>
    )
}

export default PlanetChart
