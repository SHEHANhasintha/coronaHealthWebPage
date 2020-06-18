import React, { Component,useContext,useEffect } from '../../node_modules/react';
//import Header from './../headerSections/HomePageHeader.js';
import Footer from './../footer/Footer'
import { AuthContext } from './../contexts/AuthContext';
import Header from './../headerSections/appHeader';
import axios from 'axios';


function Application(props){

    const clicked = (e) => {
        e.preventDefault();
    }

  useEffect(function() {

      let thita = {}
      thita.email = localStorage.getItem('email');
      thita.token = localStorage.getItem('token');

        axios
          .post("/app/local/tokenrenew",thita)
          .then((res) => {
            console.log(res)
            if (res.status == 200){
              localStorage.setItem('email', res.data.login.email);
              localStorage.setItem('firstName', res.data.login.firstName);
              localStorage.setItem('lastName', res.data.login.lastName);
              localStorage.setItem('token', res.data.tokenData.token);
              localStorage.setItem('iat', res.data.tokenData.iat);
              localStorage.setItem('exp', res.data.tokenData.exp);
              localStorage.setItem('isAuthenticated', true);
            }
          })
          .catch((err) => {
            console.log(err)
            })

    return function cleanup() {

    }
  }, []);

    return (
       <AuthContext.Consumer>
        {(context) =>  
          <div>
          <Header>     
            <div>
            </div>
          </Header>
          <Footer/>

          </div>
        }
        </AuthContext.Consumer>
    );
  
}

export default Application;
