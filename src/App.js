/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import './App.css';
import { useState, useEffect } from 'react';
import PlanetChart from './components/PlanetChart';

const fetchData = (url) => {
  const [data, setData] = useState('');
  // const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [...planetsArray] = data.results;
    setData(planetsArray);
    // setLoading(false);
  }, []);

  // return { data, loading };
  return { data };
};

function App() {
  const { data }  = fetchData('https://swapi.dev/api/planets/'); 
  console.log(data);
  return (
    <div className="App">
      {/* {loading ? <div> ...loading </div> : <div>{data.name}</div>} */}
      <PlanetChart data={data}/>
    </div>
  );
}

export default App;
