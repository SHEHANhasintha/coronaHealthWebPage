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
            <h2 className="section-title">What can we do...</h2>
            <p className="lead">What services will I get when I use Covid Atlas delivary methods.</p>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up">
            
            <div className="unit-4 d-block">
              <div className="unit-4-icon mb-3">
                <span className="icon-wrap"><span className="text-primary icon-clock-o"></span></span>
              </div>
              <div>
                <h3>Time saving</h3>
                <p>Online pharmacy saves your time and efforts, in only a couple of minutes you can head over the E-pharmacy websites and buy any prescription medicine as per your need. It saves the time that you can spend in traveling to your local pharmacy shop and waiting in line for medicine. </p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>

          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

            <div className="unit-4 d-block">
              <div className="unit-4-icon mb-3">
                <span className="icon-wrap"><span className="text-primary icon-money"></span></span>
              </div>
              <div>
                <h3>Money Saving</h3>
                <p>The cost of medicine purchased from E-pharmacy is less than local medical shop because in online pharmacy the medicine comes directly in store from the manufacturer, there is no third party. They also provide a discount on the price for any products purchased in bulk. </p>
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
                <p>Online pharmacy serves an appropriate way of buying medicine for adulthood, physically challenged and working professionals, due to the difficulty for them to go local medical shop and efficient delivery to your door step. </p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>


          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up">
            <div className="unit-4 d-block">
              <div className="unit-4-icon mb-3">
                <span className="icon-wrap"><span className="text-primary icon-user"></span></span>
              </div>
              <div>
                <h3>User Privacy</h3>
                <p>The information that you have provided during the purchase of medicine is usually private and confidential in online pharmacy.</p>
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
                <p>You can place your order anytime from anywhere as there is no issue of pharmacy closing down. 24*7 online customer supports are there to solve your queries regarding medicines. </p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>

            
          </div>
          
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="unit-4 d-block">
              <div className="unit-4-icon mb-3">
                <span className="icon-wrap"><span className="text-primary icon-mobile"></span></span>
              </div>
              <div>
                <h3>Mobility</h3>
                <p>Online pharmacy provides a mobile-based application for consumers, where they can upload the scanned copy of the prescription and easily place their requests for medicine.</p>
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
