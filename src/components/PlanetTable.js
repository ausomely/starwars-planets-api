import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const PlanetTable = ({ data, loading }) => {
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
        alwaysShowAllBtns: true,
        hideSizePerPage: true,
        onPageChange: function (page) {
          console.log('page', page);
        }
      });
    return (
        <div className='container ps-5 d-flex flex-column justify-content-center'>
            {loading ? <></> : <BootstrapTable id='table' keyField='name' data={planets} columns={columns} pagination={pagination} hover/>}
        </div>
    )
}

export default PlanetTable
