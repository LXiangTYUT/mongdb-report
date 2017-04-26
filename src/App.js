import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SQLSUtils from  './dao/sqlserverUtils'

const results = [];
function getTestData() {
    const sql = 'select top 10 * from g_grant_loan';
    SQLSUtils.query(sql, results);
    console.log(results);
    return results;

}




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <textarea>
              { getTestData()}
          </textarea>
        </p>
      </div>
    );
  }
}

export default App;
