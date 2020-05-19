import React, { Component } from '../../node_modules/react';
//import logo from './logo.jpg';
import './BodyBigFeatures.css';

class BodyBigFeatures extends Component{

  render(){
    return (
        <div className="feature-big">
          <div className="container">
            <div className="row mb-5 site-section">
              <div className="col-lg-7 aos-init aos-animate" data-aos="fade-right">
                <img src="images/undraw_gift_card_6ekc.svg" alt="person" className="img-fluid" />
              </div>
              <div className="col-lg-5 pl-lg-5 ml-auto mt-md-5">
                <h2 className="text-black">Create an account on Covid Atalas</h2>
                <p className="mb-4">Want to know how to get our service. It is so simple and easy. First create an account using the signup button and be a member of our community. No need to worry about money our service is totally free.</p>
                
                <div className="author-box aos-init aos-animate" data-aos="fade-left">
                  <div className="d-flex mb-4">
                    <div className="mr-3">
                      <img src="./images/person_4.jpg" alt="person" className="img-fluid rounded-circle"/>
                    </div>
                    <div className="mr-auto text-black">
                      <strong className="font-weight-bold mb-0">Grey Simpson</strong> <br/>
                      Co-Founder, XYZ Inc.
                    </div>
                  </div>
                  <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</blockquote>
                </div>
              </div>
            </div>

            <div className="mt-5 row mb-5 site-section ">
              <div className="col-lg-7 order-1 order-lg-2 aos-init" data-aos="fade-left">
                <img src="./images/undraw_metrics_gtu7.svg" alt="person" className="img-fluid"/>
              </div>
              <div className="col-lg-5 pr-lg-5 mr-auto mt-5 order-2 order-lg-1">
                <h2 className="text-black">Add your prescription</h2>
                <p className="mb-4">Did you create the account? Now you can login to your account and make a reservation. All you have to do is enter your details and add a prescription using the image format.</p>
                
                

                <div className="author-box aos-init" data-aos="fade-right">
                  <div className="d-flex mb-4">
                    <div className="mr-3">
                      <img src="./images/person_1.jpg" alt="Image" className="img-fluid rounded-circle"/>
                    </div>
                    <div className="mr-auto text-black">
                      <strong className="font-weight-bold mb-0">Kimberly Gush</strong> <br/>
                      Co-Founder, XYZ Inc.
                    </div>
                  </div>
                  <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</blockquote>
                </div>
              </div>
            </div>

            <div className="row mb-5 site-section">
              <div className="col-lg-7 aos-init" data-aos="fade-right">
                <img src="images/undraw_gift_card_6ekc.svg" alt="person" className="img-fluid"/>
              </div>
              <div className="col-lg-5 pl-lg-5 ml-auto mt-md-5">
                <h2 className="text-black">Medical Personal Verification</h2>
                <p className="mb-4">Make sure your prescription is valid upto date and doctor's signature or seal is clearly mentioned. We are unable to supply medicines for invalied prescriptions. Therefore, please check your prescription date and doctor's signature before sending us.</p>
                
                <div className="author-box aos-init" data-aos="fade-left">
                  <div className="d-flex mb-4">
                    <div className="mr-3">
                      <img src="images/person_4.jpg" alt="person" className="img-fluid rounded-circle"/>
                    </div>
                    <div className="mr-auto text-black">
                      <strong className="font-weight-bold mb-0">Grey Simpson</strong> <br/>
                      Co-Founder, XYZ Inc.
                    </div>
                  </div>
                  <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</blockquote>
                </div>
              </div>
            </div>

            <div className="mt-5 row mb-5 site-section ">
              <div className="col-lg-7 order-1 order-lg-2 aos-init" data-aos="fade-left">
                <img src="images/undraw_metrics_gtu7.svg" alt="person" className="img-fluid"/>
              </div>
              <div className="col-lg-5 pr-lg-5 mr-auto mt-5 order-2 order-lg-1">
                <h2 className="text-black">Post Delivary directly to your home</h2>
                <p className="mb-4">Did you upload the prescription to us. That's all you have to do. We will deliver medicines to your home atleast within two days. (Delays can occur when dealing with rare medicines.) Now you don't have to waste your energy and money while searching for medicines. We are here to help you.</p>
                
                

                <div className="author-box aos-init" data-aos="fade-right">
                  <div className="d-flex mb-4">
                    <div className="mr-3">
                      <img src="images/person_1.jpg" alt="person" className="img-fluid rounded-circle"/>
                    </div>
                    <div className="mr-auto text-black">
                      <strong className="font-weight-bold mb-0">Kimberly Gush</strong> <br/>
                      Co-Founder, XYZ Inc.
                    </div>
                  </div>
                  <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default BodyBigFeatures;
