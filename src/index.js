import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route, Link, NavLink, Switch, Routes } from 'react-router-dom';
import Add from './customer/Add';

const routing = (
  <Router>
    <div>
      <h1>Meni's Demo Application</h1>


      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </div>
  </Router>
);


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();