import React from 'react'

const PlanetChart = ({ data }) => {
    return (
        <div>
            {Object.values(data).map((planet, planetIdx) => (
                <p key={planetIdx}>{planet.name} {planet.population}</p>
            ))}
        </div>
    )
}

export default PlanetChart
