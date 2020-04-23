import React, { Component } from '../../node_modules/react';
//import logo from './logo.jpg';
import './OurTeam.css';

class OurTeam extends Component{

  render(){
    return (
<div className="site-section" id="our-team-section">
      <div className="container">
        <div className="row mb-5 justify-content-center text-center aos-init aos-animate" data-aos="fade-up">
          <div className="col-7 text-center  mb-5">
            <h2 className="section-title">Our Team</h2>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
          </div>
        </div>
       
        <div className="row">

          <div className="col-lg-4 col-md-6 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="person">
              <div className="bio-img">
                <figure>
                  <img src="images/person_1.jpg" alt="Image" className="img-fluid" />
                </figure>
                <div className="social">
                  <a href="#"><span className="icon-facebook"></span></a>
                  <a href="#"><span className="icon-twitter"></span></a>
                  <a href="#"><span className="icon-instagram"></span></a>
                </div>
              </div>
              <h2 className="text-black h1">Cloe Marena</h2>
              <span className="sub-title d-block mb-3">President</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="person">
              <div className="bio-img">
                <figure>
                  <img src="images/person_2.jpg" alt="Image" className="img-fluid" />
                </figure>
                <div className="social">
                  <a href="#"><span className="icon-facebook"></span></a>
                  <a href="#"><span className="icon-twitter"></span></a>
                  <a href="#"><span className="icon-instagram"></span></a>
                </div>
              </div>
              <h2 className="text-black h1">John Rooster</h2>
              <span className="sub-title d-block mb-3">Marketing</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div className="person">
              <div className="bio-img">
                <figure>
                  <img src="images/person_3.jpg" alt="Image" className="img-fluid" />
                </figure>
                <div className="social">
                  <a href="#"><span className="icon-facebook"></span></a>
                  <a href="#"><span className="icon-twitter"></span></a>
                  <a href="#"><span className="icon-instagram"></span></a>
                </div>
              </div>
              <h2 className="text-black h1">Will Turner</h2>
              <span className="sub-title d-block mb-3">Marketing</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 aos-init aos-animate" data-aos="fade-up">
            <div className="person">
              <div className="bio-img">
                <figure>
                  <img src="images/person_4.jpg" alt="Image" className="img-fluid"/>
                </figure>
                <div className="social">
                  <a href="#"><span className="icon-facebook"></span></a>
                  <a href="#"><span className="icon-twitter"></span></a>
                  <a href="#"><span className="icon-instagram"></span></a>
                </div>
              </div>
              <h2 className="text-black h1">Nicolas Stainer</h2>
              <span className="sub-title d-block mb-3">Financing</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="person">
              <div className="bio-img">
                <figure>
                  <img src="images/person_5.jpg" alt="Image" className="img-fluid" />
                </figure>
                <div className="social">
                  <a href="#"><span className="icon-facebook"></span></a>
                  <a href="#"><span className="icon-twitter"></span></a>
                  <a href="#"><span className="icon-instagram"></span></a>
                </div>
              </div>
              <h2 className="text-black h1">George Brook</h2>
              <span className="sub-title d-block mb-3">Founder</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="person">
              <div className="bio-img">
                <figure>
                  <img src="images/person_6.jpg" alt="Image" className="img-fluid" />
                </figure>
                <div className="social">
                  <a href="#"><span className="icon-facebook"></span></a>
                  <a href="#"><span className="icon-twitter"></span></a>
                  <a href="#"><span className="icon-instagram"></span></a>
                </div>
              </div>
              <h2 className="text-black h1">Emely Hopson</h2>
              <span className="sub-title d-block mb-3">Marketing</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              
            </div>
          </div>

        </div>
      </div>
    </div>
    );
  }
}

export default OurTeam;
