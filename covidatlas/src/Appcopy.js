import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class Appcopy extends Component{
  state = { users: [] }


  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));

  };


  render(){
    return (
      <div className="Appcopy">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            CovidAtlas - we will care about your medicine!
          </p>

        </header>
      </div>
    );
  }
}

export default Appcopy;
