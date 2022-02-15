
import './App.css';
import React, { Component } from "react";
import axios from "axios"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      customer: [],
      name: ""
    };
  }

  componentDidMount() {
    var self = this;
    axios.get("https://pos-api-react.azurewebsites.net/api/customer/all")
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));
        self.setState({ customer: response.data.data });
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  // getCustomerDetails = () => {
  //   axios.get("https://pos-api-react.azurewebsites.net/api/customer/all")
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data.data));

  //       this.setState({ customer: response.data.data });
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     });
  // }


  render() {
    let customerData = this.state.customer.map((item) => {
      return (<tr key={item.customerCode}>
        <td>{item.customerCode}</td>
        <td>{item.customerName}</td>
        <td>{item.mobileNumber}</td>
        <td className="text-center "><a href='#'>Edit</a> | <a href='#'>Delete</a></td>
      </tr>);
    });


    return (<div className="container">
      <h2>{this.state.name}</h2>
      <h1 className='text-center'>Customer Details</h1><hr /><br />
      <div className='row' style={{ paddingBottom: 20 }}>
        <div className='col-md-12 text-right'>
          <a href="/add" className="btn btn-outline-success rightAlign">+ Add Customer</a>
        </div>

      </div>

      <table className="table table-bordered" style={{ paddingTop: 10 }}>
        <thead className="thead-light" >

          <tr className='text-center'>
            <th >Customer Code</th>
            <th >Customer Name</th>
            <th >Mobile Number</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody>
          {customerData}
        </tbody>
      </table>

    </div >)
  }
}

export default App;
