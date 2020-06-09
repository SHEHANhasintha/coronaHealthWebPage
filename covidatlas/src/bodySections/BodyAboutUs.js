import React, { Component } from '../../node_modules/react';
//import logo from './logo.jpg';

import './BodyAboutUs.css';

class BodyAboutUs extends Component{

  render(){
    return (
      <div className="site-section bg-light" id="about-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title mb-3">About Us</h2>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-right">
              <img src="images/undraw_bookmarks_r6up.svg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-5 ml-auto pl-lg-5">
              <h2 className="text-black mb-4 h3 font-weight-bold">Our Mission</h2>
              <p className="mb-4">Due to the current situation of Covid-19 virus, most of citizens are unable to supply their medicines by pharmacies. Our main aim is to solve this problem and help our citizens. As web developers, we have developed a userfriendly website as a solution to this problem. We are happy to help our citizens by providing a quality service. Main properties of our system are,</p>
              <ul className="ul-check mb-5 list-unstyled success">
                <li>Laborum enim quasi at modi</li>
                <li>Ad at tempore</li>
                <li>Labore quaerat esse</li>
              </ul>
              <p><a href="!#" className="btn btn-primary">Learn More</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyAboutUs;
