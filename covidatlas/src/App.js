import React, { Component, useState, useEffect, useContext } from 'react';
import './App.css';
import HomePageHeader from './headerSections/HomePageHeader.js';
import Body from './bodySections/Body.js';
import Footer from './footer/Footer';

import AuthContextProvider from './contexts/AuthContext';

import {BrowserRouter, Router, Switch, Route, Redirect} from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const AuthenticationSignIn = React.lazy(() => import('./reDesignSignAndregister/signIn'));
const AuthenticationSignUp = React.lazy(() => import('./reDesignSignAndregister/signUp'));

const Page404 = React.lazy(() => import('./errorPages/404'));

function App(props){

  useEffect(function() {
    //input code here
  }, []);

    return ( 
          <div className="App">
            <AuthContextProvider>
              <BrowserRouter>
                <React.Suspense fallback={loading()}>
                  <Switch>
                      <Route path="/" exact  name="Home"  render={props => <HomePageHeader {...props} />}/>
                  </Switch>
                      <Switch>
                          <Route path="/" exact  name="Home" render={props => <Body {...props}/>} />
                          <Route path="/login" exact name="Login Page" render={props => <AuthenticationSignIn {...props}/>}/>
                          <Route path="/signup" exact name="Login Page" render={props => <AuthenticationSignUp {...props}/>}/>
                          <Route path="/404" exact name="Page 404" render={props => <Page404 {...props}/>} />
                          <Route path='*' exact={true} component={Page404} />
                      </Switch>
                </React.Suspense>
              </BrowserRouter>
            </AuthContextProvider>
          </div>
        );
}

export default App;
