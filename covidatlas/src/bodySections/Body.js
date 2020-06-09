import React, { Component,useContext,useEffect } from '../../node_modules/react';
import './style.css'
//import './main'


import BodySectionLanding from './BodySectionLanding.js';
import BodyFeatures from './BodyFeatures.js';
import BodyBigFeatures from './BodyBigFeatures.js';
import BodyAboutUs from './BodyAboutUs';
import OurTeam from './OurTeam';
import ContactUs from './ContactUs';
import Footer from './../footer/Footer';
import ReactDOM from 'react-dom'
import './Body.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function Body(props){

    const clicked = (e) => {
        e.preventDefault();
    }

  useEffect(function() {
    return function cleanup() {
      //console.log("gggggggggg")
    }
  }, []);

    return (
        <div className="contain_main_page">
            <BodySectionLanding {...props} clicked={clicked} patient={props.patient} pharmisist={props.pharmisist}/>
            <BodyFeatures />
            <BodyBigFeatures />
            <BodyAboutUs />
            <OurTeam />
            <ContactUs />
            <Footer/>
        </div>
        
    );
  
}

export default Body;


