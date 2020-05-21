import React, { Component } from '../../node_modules/react';
import logo from './../images/logo.png';
import './HomePageHeader.css';

class HomePageHeader extends Component{

  render(){
    return (
      <div className="HomePageHeader">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <div id="sticky-wrapper" className="sticky-wrapper" style={{height: "80.125px"}}><header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner" >

        <div className="container">
        <div className="row align-items-center">
            
            <div className="col-6 col-md-3 col-xl-4  d-block">
            <h1 className="mb-0 site-logo"><a href="/" className="text-black h2 mb-0"><img src={logo} className="mainLogo"/>Covid Atlas<span className="text-primary">.</span> </a></h1>
            </div>

            <div className="col-12 col-md-9 col-xl-8 main-menu">
            <nav className="site-navigation position-relative text-right" role="navigation">

                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
                <li><a href="#home-section" className="nav-link active">Home</a></li>
                <li><a href="#features-section" className="nav-link">Features</a></li>
                <li className="has-children">
                    <a href="#about-section" className="nav-link">About Us</a>
                    <ul className="dropdown arrow-top">
                    <li><a href="!#" target="_blank" className="nav-link"><span className="text-primary">More Free Templates</span></a></li>
                    <li><a href="#our-team-section" className="nav-link">Our Team</a></li>
                    <li className="has-children">
                        <a href="#">More Links</a>
                        <ul className="dropdown">
                        <li><a href="!#">Menu One</a></li>
                        <li><a href="!#">Menu Two</a></li>
                        <li><a href="!#">Menu Three</a></li>
                        </ul>
                    </li>
                    </ul>
                </li>

                <li><a href="#contact-section" className="nav-link">Contact</a></li>
                <li><a href="/signUp" className="nav-link btn btn-primary mr-2 mb-2">Sign up</a></li>
                <li><a href="/login" className="nav-link btn btn-primary mr-2 mb-2" style={{height:"15px",lineHeight:"0px"}}>Login</a></li>
                </ul>
            </nav>
            </div>


            <div className="col-6 col-md-9 d-inline-block d-lg-none ml-md-0"><a href="!#" className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a></div>

        </div>
        </div>

        </header></div>
      </div>
    );
  }
}

export default HomePageHeader;
