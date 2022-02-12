
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-12 text-right'>
          <a href="/add" className="btn btn-outline-success rightAlign">Add</a>
        </div>

      </div>

      <table className="table table-bordered" style={{ paddingTop: 10 }}>
        <thead className="thead-light" >

          <tr>
            <th >Customer Code</th>
            <th >Customer Name</th>
            <th >Mobile Number</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Mark</td>
            <td>Otto</td>
            <td className="text-center"><a href='#'>Edit</a> | <a href='#'>Delete</a></td>
          </tr>
          <tr>
            <td>002</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td className="text-center"><a href='#'>Edit</a> | <a href='#'>Delete</a></td>
          </tr>
          <tr>
            <td>003</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td className="text-center "><a href='#'>Edit</a> | <a href='#'>Delete</a></td>
          </tr>
        </tbody>
      </table>

    </div >
  );
}

export default App;
