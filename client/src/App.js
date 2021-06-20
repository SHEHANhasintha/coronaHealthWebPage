
import React, { Component, useState, useEffect, useContext } from 'react';

import './App.css';
import Body from './bodySections/Body.js';


import {BrowserRouter, Router, Switch, Route, Redirect} from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function App(props){

  useEffect(function() {
    //input code here
  }, []);

    return ( 
          <div className="App">
              <BrowserRouter>
                <React.Suspense fallback={loading()}>
                          <Route path="/"  name="Home" render={props => <Body {...props}/>} />
                 </React.Suspense>
              </BrowserRouter>
          </div>
        );
}

export default App;
