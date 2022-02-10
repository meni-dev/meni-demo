
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container">
      <div className='text-right'>
        <a href="/add" className="btn btn-primary">Add</a>
      </div>

      <table className="table table-bordered border-4">
        <thead className="thead-light"  "thead-dark" >

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
