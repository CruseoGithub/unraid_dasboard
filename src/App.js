import React, {Component} from 'react';
import './App.css';
import Card from "./components/Home/Card";
import axios from 'axios'
import DotCanvas from "./components/DotCanvas";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Server from "./components/Server/Server";

const api = axios.create({
  baseURL: `http://192.168.0.107:5678/webhook/`
})

const header = {
  'Access-Control-Allow-Origin' : '*'
}
class App extends Component {
  state = {
    unraid: []
  }
  constructor() {
    super();
    //api.post('/login', '{"ip":"192.168.0.107","authToken":"bXF0dDpwYXNz"}', {headers: header})
    this.getData();
  }
  getData = async () => {
    api.get('/unraid_all',).then(res => {
      //this.setState({unraid: res.data}, {headers: header})
      console.log(res.data.servers)
    })
  }


  render() {
    return (
        <Router>
          <div className="App">
            <DotCanvas>
            </DotCanvas>
            <Switch>
              <Route path="/" exact>
                <div className="CardSection">
                  <Card type="server"></Card>
                  <Card type="docker"></Card>
                  <Card type="vm"></Card>
                </div>
              </Route>
              <Route path="/server" exact>

              </Route>
              <Route path="/docker" exact>

              </Route>
              <Route path="/vm" exact>

              </Route>

            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
