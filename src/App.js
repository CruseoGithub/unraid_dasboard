import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Card from "./components/Card";
import axios from 'axios'

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
        <div className="App">
          <div className="CardSection">
            <Card type="server"></Card>
            <Card type="docker"></Card>
            <Card type="vm"></Card>
          </div>

        </div>
    );
  }
}

export default App;
