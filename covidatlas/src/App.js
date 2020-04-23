import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import HomePageHeader from './headerSections/HomePageHeader.js';
import Body from './bodySections/Body.js';
import Footer from './footer/Footer';

class App extends Component{
  state = { users: [] }


  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));

  };

  render(){
    return (
      <div className="App">

        <HomePageHeader />
        <Body />
        <Footer />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            CovidAtlas - we will care about your medicine!
          </p>
          <ul>
            {this.state.users.map(user => 
              <li key={user.id}>{user.username}</li>)}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
