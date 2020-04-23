import React, { Component } from '../../node_modules/react';
//import logo from './logo.jpg';
import './BodySectionLanding.css';

class BodySectionLanding extends Component{

  render(){
    return (
        <div className="site-blocks-cover" style={{overflow: "hidden"}}>
            <div className="container">
                <div className="row align-items-center justify-content-center">

                <div className="col-md-12 aos-init aos-animate" style={{position:"relative"}} data-aos="fade-up" data-aos-delay="200">
                    
                    <img src="images/undraw_investing_7u74.svg" alt="Image" className="img-fluid img-absolute"/>

                    <div className="row mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-6 mr-auto">
                        <h1>Make Your Business More Profitable</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                        <div>
                        <a href="#" className="btn btn-primary mr-2 mb-2">Get Started</a>
                        </div>
                    </div>
                    
                    
                    </div>

                </div>
                </div>
            </div>
            </div>
    );
  }
}

export default BodySectionLanding;
