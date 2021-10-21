import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const PlanetTable = ({ data }) => {
    const planets = data;
    const columns = [
        { dataField: 'name', text: 'Name'}, 
      { dataField: 'population', text: 'Population'}, 
      { dataField: 'rotation_period', text: 'Rotation Period'},
      { dataField: 'orbital_period', text: 'Orbital Period'},
      { dataField: 'diameter', text: 'Diameter'},
      { dataField: 'climate', text: 'Climate'},
      { dataField: 'surface_water', text: 'Surface Water'}
    ];
    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: false,
        alwaysShowAllBtns: false,
        onPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        }
      });
    return (
        <div>
            <BootstrapTable keyField='name' data={planets} columns={columns} pagination={pagination} hover/>
        </div>
        // <div className='container'>
        //     <table className='table table-light'>
        //         <thead>
        //             <tr>
        //                 <th>Name</th>
        //                 <th>Population</th>
        //                 <th>Rotation Period</th>
        //                 <th>Orbital Period</th>
        //                 <th>Diameter</th>
        //                 <th>Climate</th>
        //                 <th>Surface Water</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {data.map((planet, planetIdx) => (
        //                 <tr key={planetIdx}>
        //                     <td>{planet.name}</td>
        //                     <td>{planet.population}</td>
        //                     <td>{planet.rotation_period}</td>
        //                     <td>{planet.orbital_period}</td>
        //                     <td>{planet.diameter}</td>
        //                     <td>{planet.climate}</td>
        //                     <td>{planet.surface_water}</td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
    )
}

export default PlanetTable
