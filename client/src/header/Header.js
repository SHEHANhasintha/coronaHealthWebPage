import React, { Component,useContext,useEffect } from '../../node_modules/react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './Header.css';
import Button from './../components/button'

function Header(props){

    const clicked = (e) => {
        e.preventDefault();
    }

  useEffect(function() {
    return function cleanup() {
      //console.log("gggggggggg")
    }
  }, []);

    return (

          <header id="header">
            <span className="avatar"><img src="images/avatar.jpg" alt="" /></span>
            <h1 className="main-intro"><span className="title-header">Hello, I'm Shehan</span><br/>A programmer who is capable of providing software solutions and willing to <br/>commit for the development of companies and brands</h1>
            <ul className="icons">
              <li><a href="https://github.com/SHEHANhasintha" target="_blank"  className="icon style2 fa-github"><span className="label">Email</span></a></li>
              <li><a href="https://medium.com/@shehanPW" target="_blank"  className="icon style2 fa-medium"><span className="label">500px</span></a></li>
              <li><a href="https://www.facebook.com/shehan.hasintha.9/" target="_blank"  className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="https://www.instagram.com/shehanhasintha" target="_blank"  className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="https://www.youtube.com/channel/UC1z2dnwhCuxmwS9Eoo8b7CA?view_as=subscriber" target="_blank"  className="icon style2 fa-youtube-play"><span className="label">500px</span></a></li>
              <li><a href="https://linkedin.com/in/shehanhasintha/" target="_blank"  className="icon style2 fa-linkedin"><span className="label">500px</span></a></li>
              <li><a href="https://twitter.com/EkanShehan"  target="_blank" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
            </ul>
            <Button/>
          </header>

        
    );
  
}

export default Header;


