import React, { Component,useContext,useEffect } from '../../node_modules/react';
import Header from './../headerSections/HomePageHeader.js';
//import './404.css';
import Footer from './../footer/Footer'


function Application(props){

    const clicked = (e) => {
        e.preventDefault();
    }

  useEffect(function() {
    return function cleanup() {
      //console.log("gggggggggg")
    }
  }, []);

    return (
        <div>
            <Header />

<h1>Welcome to the Fucking application!</h1>
<h1>Welcome to the Fucking application!</h1>
<h1>Welcome to the Fucking application!</h1>
<h1>Welcome to the Fucking application!</h1>
<h1>Welcome to the Fucking application!</h1>
<h1>Welcome to the Fucking application!</h1>
            <Footer/>
        </div>
    );
  
}

export default Application;
