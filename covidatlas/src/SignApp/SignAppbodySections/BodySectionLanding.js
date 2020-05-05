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
                    
                    <img src="images/phramcy2.png" alt="Image" className="img-fluid img-absolute"/>

                    <div className="row mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-6 mr-auto">
                        <h1>LET US CARE ABOUT YOUR MEDICIEN</h1>
                        <p className="mb-5">If you are having trouble of getting your medicien. We deliver your medicien right on to the foot step of your door.</p>
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
