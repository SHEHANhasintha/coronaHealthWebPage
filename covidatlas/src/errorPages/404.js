import React, { Component,useContext,useEffect } from '../../node_modules/react';
import Header from './../headerSections/HomePageHeader.js';
import './404.css';
import Footer from './../footer/Footer'


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
            <Header />
            <div>
                <div className="site">
                <div className="sketch">
                <div className="bee-sketch red"></div>
                <div className="bee-sketch blue"></div>
                </div>

                <h1 className="title404">404:
                <small>Page Not Found</small></h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
  
}

export default Body;


