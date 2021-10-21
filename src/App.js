    /* eslint-disable react-hooks/exhaustive-deps */
    /* eslint-disable react-hooks/rules-of-hooks */
    // import './App.css';
    import { useState, useEffect } from 'react';
    import PlanetChart from './components/PlanetChart';
    import PlanetTable from './components/PlanetTable';

    function App() {
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
                        'rgba(75, 119, 190, 1)'
                    ],
                    // borderWidth: 2,
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
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            });
            
            setData(sortedPlanets);
            setLoading(false);
            renderChart(sortedPlanets);
        }, []);

        return {data, loading};
    }
    // Pass Data to use in table later
    const {data, loading} = fetchPlanetData();
    console.log(data);
    
    return (
        <div className="App">
        <PlanetChart loading={loading} chartData={chartData} />
        <PlanetTable data={data}/>
        </div>
    );
    }

    export default App;
