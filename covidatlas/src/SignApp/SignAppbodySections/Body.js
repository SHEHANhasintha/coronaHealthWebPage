import React, { Component } from '../../../node_modules/react';
/*import BodySectionLanding from './BodySectionLanding.js';
import BodyFeatures from './BodyFeatures.js';
import BodyBigFeatures from './BodyBigFeatures.js';
import BodyAboutUs from './BodyAboutUs';
import OurTeam from './OurTeam';
import ContactUs from './ContactUs';*/
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.scss';


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));



class Body extends Component{

  render() {
    return (
      <div>
        <p>fjkdshkf kkfhkjdhgd</p>
        <p>fjkdshkf kkfhkjdhgd</p>
        <p>fjkdshkf kkfhkjdhgd</p>
        <p>fjkdshkf kkfhkjdhgd</p>
        <p>fjkdshkf kkfhkjdhgd</p>
        <p>fjkdshkf kkfhkjdhgd</p>
        <p>fjkdshkf kkfhkjdhgd</p>
        <p>fjkdshkf kkfhkjdhgd</p>
      </div>
    );
  }
}

export default Body;
