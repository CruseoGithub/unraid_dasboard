import React, {Component} from "react";
import axios from 'axios'

const api = axios.create({
    baseURL: `http://192.168.0.107:5678/webhook/`
})

class Server extends Component {


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
            <div>

            </div>
        );
    }
}

export default Server;