import React, { Component } from '../../node_modules/react';
import BodySectionLanding from './BodySectionLanding.js';
import BodyFeatures from './BodyFeatures.js';
import BodyBigFeatures from './BodyBigFeatures.js';
import BodyAboutUs from './BodyAboutUs';
import OurTeam from './OurTeam';
import ContactUs from './ContactUs';

class Body extends Component{

  render(){
    return (
        <div>
            <BodySectionLanding />
            <BodyFeatures />
            <BodyBigFeatures />
            <BodyAboutUs />
            <OurTeam />
            <ContactUs />
        </div>
        
    );
  }
}

export default Body;
