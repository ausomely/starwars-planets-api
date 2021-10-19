/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
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
    console.log(planetNames, populations);
    
        setChartData({
            labels: planetNames,
            datasets: [
                {
                    label: 'Planet Population',
                    data: populations,
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        });
    };
  
    const fetchData = (url) => {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        

        useEffect(async () => {
          const response = await fetch(url);
          const data = await response.json();
          const [...items] = data.results;

          // Alphabetically sort planets by name
          const sortedPlanets = items.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        console.log(sortedPlanets);
          setData(sortedPlanets);
          setLoading(false);
          renderChart(sortedPlanets);
        }, []);
      
        return { data, loading };
    };

    const {data, loading} = fetchData('https://swapi.dev/api/planets/');

    return (
        <div>
            {loading ? <div> ...loading </div> : Object.values(data).map((planet, planetIdx) => (
                <p key={planetIdx}>{planet.name} {planet.population}</p>
            ))}
            <div>
                <Bar 
                data={chartData} 
                />
            </div>
        </div>
    )
}

export default PlanetChart
