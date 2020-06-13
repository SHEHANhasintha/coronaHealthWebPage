
import React, { Component, useState, useEffect, useContext } from 'react';
import './App.css';

//import "./cssFiles/fonts/icomoon/style.css";
//import "./cssFiles/css/jquery-ui.css";
//import "./cssFiles/css/owl.carousel.min.css";
/*import "./cssFiles/css/owl.theme.default.min.css";
import "./cssFiles/css/owl.theme.default.min.css";
import "./cssFiles/css/jquery.fancybox.min.css";
import "./cssFiles/css/bootstrap-datepicker.css";
//import "./cssFiles/fonts/flaticon/font/flaticon.css";
import "./cssFiles/css/aos.css";


import 'jquery';
//import { jQuery, } from 'jquery';
//global.jQuery = $;
import 'bootstrap';
//import jQuery from "./jsFiles/jquery-3.3.1.min.js";
import "./jsFiles/jquery-ui.js";
//import "./jsFiles/popper.min.js";
import "./jsFiles/bootstrap.min.js";
import "./jsFiles/owl.carousel.min.js";
import "./jsFiles/jquery.countdown.min.js";
import "./jsFiles/bootstrap-datepicker.min.js";
import "./jsFiles/jquery.easing.1.3.js";
import "./jsFiles/aos.js";
import "./jsFiles/jquery.fancybox.min.js";
import "./jsFiles/jquery.sticky.js";

import "./jsFiles/main.js";*/


import HomePageHeader from './headerSections/HomePageHeader.js';
import Body from './bodySections/Body.js';
import Footer from './footer/Footer';

import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';

import Application from './app/app'
import { ProtectedRoute } from './protectedRoute'

import {BrowserRouter, Router, Switch, Route, Redirect} from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const AuthenticationSignIn = React.lazy(() => import('./reDesignSignAndregister/signIn'));
const AuthenticationSignUp = React.lazy(() => import('./reDesignSignAndregister/signUp'));

const Page404 = React.lazy(() => import('./errorPages/404'));
const Verify = React.lazy(() => import('./verify/verify'));
const ForgotPassword = React.lazy(() => import('./verify/forgotPassword'));

function App(props){

  useEffect(function() {
    //input code here
  }, []);

    return ( 
          <div className="App">
            <ThemeContextProvider>
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
                          <Route path="/verify" exact name="verify" render={props => <Verify {...props}/>} />
                          <ProtectedRoute path="/app" exact name="verify" component={Application} />
                          <Route path="/forgotPassword" exact name="forgotPassword" render={props => <ForgotPassword {...props}/>} />
                          <Route path="/404" exact name="Page 404" render={props => <Page404 {...props}/>} />
                          <Route path='*' exact={true} component={Page404} />
                      </Switch>
                </React.Suspense>
              </BrowserRouter>
            </AuthContextProvider>
            </ThemeContextProvider>
          </div>
        );
}

export default App;
