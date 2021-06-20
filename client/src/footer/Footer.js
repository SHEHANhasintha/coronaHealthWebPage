import React, { Component } from '../../node_modules/react';
//import logo from './logo.jpg';
import './Footer.css';

class Footer extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
        <div className="footer py-5 text-center">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12">
                <p className="mb-0">
                  <a href="!#" className="p-3"><span className="icon-facebook"></span></a>
                  <a href="!#" className="p-3"><span className="icon-twitter"></span></a>
                  <a href="!#" className="p-3"><span className="icon-instagram"></span></a>
                  <a href="!#" className="p-3"><span className="icon-linkedin"></span></a>
                  <a href="!#" className="p-3"><span className="icon-pinterest"></span></a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="mb-0">
                Copyright ©<script>document.write(new Date().getFullYear());</script>2020 All rights reserved | CovidAtlas with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://covidatlas.herokuapp.com/" target="_blank"  rel="noopener noreferrer">CovidAtlas</a>
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Footer;
