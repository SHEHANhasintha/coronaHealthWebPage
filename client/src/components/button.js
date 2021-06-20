
import React, { Component, useState, useEffect, useContext } from 'react';

import './button.css'

import {BrowserRouter, Router, Switch, Route, Redirect} from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function Button(props){

  useEffect(function() {
    //input code here
  }, []);

    return ( 
<div className="downloadResume">

    <div><span className="discription">Download Resume</span></div>
    <div>
    <a href="documents/pw_shehan_Resume.pdf" download><span>Download</span><span>PDF</span></a>
    <a href="documents/pw_shehan_Resume.docx" download><span>Download</span><span>WORD</span></a>
    </div>
</div>
        );
}

export default Button;
