import React, { Component } from 'react';
import logo from './logo.jpg';
import './SignApp.css';
import HomePageHeader from './SignApp/SignAppheaderSections/HomePageHeader.js';
import Body from './SignApp/SignAppbodySections/Body.js';
import Footer from './SignApp/SignAppfooter/Footer';

class SignApp extends Component{
  state = { users: [] }


  componentDidMount(){
    fetch('/sign')
      .then(res => res.json())
      .then(users => this.setState({ users }));

  };

  render(){
    return (
      <div className="SignApp">

        {/*<HomePageHeader />*/}
        <Body />
        <Footer />

        {/* 
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
        */}
      </div>
    );
  }
}

export default SignApp;
