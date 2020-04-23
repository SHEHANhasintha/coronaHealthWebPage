import React, { Component } from '../../node_modules/react';
//import logo from './logo.jpg';
import './BodyFeatures.css';

class BodyFeatures extends Component{

  render(){
    return (
<div className="site-section" id="features-section">
      <div className="container">
        <div className="row mb-5 justify-content-center text-center aos-init aos-animate" data-aos="fade-up">
          <div className="col-7 text-center  mb-5">
            <h2 className="section-title">Imagine Features</h2>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up">
            
            <div className="unit-4 d-block">
              <div className="unit-4-icon mb-3">
                <span className="icon-wrap"><span className="text-primary icon-autorenew"></span></span>
              </div>
              <div>
                <h3>Marketing Consulting</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>

          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

            <div className="unit-4 d-block">
              <div className="unit-4-icon mb-3">
                <span className="icon-wrap"><span className="text-primary icon-store_mall_directory"></span></span>
              </div>
              <div>
                <h3>Market Analysis</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="unit-4 d-block">
              <div className="unit-4-icon mb-3">
                <span className="icon-wrap"><span className="text-primary icon-shopping_basket"></span></span>
              </div>
              <div>
                <h3>Easy Purchase</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>


          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up">
            <div className="unit-4 d-block">
              <div className="unit-4-icon mb-3">
                <span className="icon-wrap"><span className="text-primary icon-settings_backup_restore"></span></span>
              </div>
              <div>
                <h3>Free Updates</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="unit-4 d-block">
              <div className="unit-4-icon mb-3">
                <span className="icon-wrap"><span className="text-primary icon-sentiment_satisfied"></span></span>
              </div>
              <div>
                <h3>100% Satistified</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>

            
          </div>
          
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="unit-4 d-block">
              <div className="unit-4-icon mb-3">
                <span className="icon-wrap"><span className="text-primary icon-power"></span></span>
              </div>
              <div>
                <h3>Easy Plugin</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
  }
}

export default BodyFeatures;
