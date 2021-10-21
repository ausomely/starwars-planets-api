
const PlanetTable = ({ data }) => {
    return (
        <div className='container'>
            <table className='table table-light'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Rotation Period</th>
                        <th>Orbital Period</th>
                        <th>Diameter</th>
                        <th>Climate</th>
                        <th>Surface Water</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((planet, planetIdx) => (
                        <tr key={planetIdx}>
                            <td>{planet.name}</td>
                            <td>{planet.population}</td>
                            <td>{planet.rotation_period}</td>
                            <td>{planet.orbital_period}</td>
                            <td>{planet.diameter}</td>
                            <td>{planet.climate}</td>
                            <td>{planet.surface_water}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PlanetTable
