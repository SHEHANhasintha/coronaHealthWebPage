import React, { Component,useContext,useEffect } from '../../node_modules/react';
import BodySectionLanding from './BodySectionLanding.js';
import BodyFeatures from './BodyFeatures.js';
import BodyBigFeatures from './BodyBigFeatures.js';
import BodyAboutUs from './BodyAboutUs';
import OurTeam from './OurTeam';
import ContactUs from './ContactUs';
import ReactDOM from 'react-dom'
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
        <div>
            <BodySectionLanding {...props} clicked={clicked} patient={props.patient} pharmisist={props.pharmisist}/>
            <BodyFeatures />
            <BodyBigFeatures />
            <BodyAboutUs />
            <OurTeam />
            <ContactUs />
        </div>
        
    );
  
}

export default Body;




/*
class Body extends Component{
    //static contextType = TryProvider;

    constructor(props){
        super(props);
        this.props = props;
    this.clicked = this.clicked.bind(this);
    }

    clicked = (e) => {
    e.preventDefault();
    //console.log("ddddddddddddddddddddddddddddddddddddddd");
    }
  render(){
    //console.log(TryProvider);
    return (
        <div>
            <BodySectionLanding {...this.props} clicked={this.clicked} patient={this.props.patient} pharmisist={this.props.pharmisist}/>
            <BodyFeatures />
            <BodyBigFeatures />
            <BodyAboutUs />
            <OurTeam />
            <ContactUs />
        </div>
        
    );
  }
}

export default Body;
*/