import React, { Component } from 'react';
import './Card.css';
import logo from "../assets/logo.svg";


class Card extends Component {

    constructor(props) {
        super(props);
        if(this.props.type == "server"){
            this.state = {
                heading: "Server Management",
                body: "Server configuration and disk status",
                image: "card-image server"

            }
        }
        if(this.props.type == "docker"){
            this.state = {
                heading: "Docker Container",
                body: "Overview of all Docker containers",
                image: "card-image docker"
            }
        }
        if(this.props.type == "vm"){
            this.state = {
                heading: "Virtual Machines",
                body: "Overview of all Docker containers",
                image: "card-image vm"
            }
        }

    }


    render() {
        return (
            <div className="card">
                <div className={this.state.image}>
                </div>
                <div className="card-text">
                    <h2>{this.state.heading}</h2>
                    <p>{this.state.body}</p>
                </div>
                <div className="card-bottom">
                    <p></p>
                </div>
            </div>
        );
    }
}

export default Card;