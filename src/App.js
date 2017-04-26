import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Query from  './dao/sqlserverUtils'


class App extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.bind.onClick(this);
        this.getTestData = this.bind.getTestData(this);
        this.state = {
            data: 'no data'
        }
    }

    onClick() {
        this.getTestData();
    }

    getTestData() {
        var config = {
            host: '',
            port: '',
            username: 'sa',
            password: 'sa',
            db: ''
        };
        const q = new Query(config);
        q.table("dbo.g_grant_loan");
        q.query('select top 10 * from ' + this.tableName, function (res) {
            this.setState({
                data: res.recordsets
            });

        }, function (err) {
            this.setState({
                data: 'no data'
            });
        });
    }

    render() {

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <button onClick={this.onClick}/>
                    <textarea>
              { this.state.data}
          </textarea>
                </p>
            </div>
        );
    }
}

export default App;
