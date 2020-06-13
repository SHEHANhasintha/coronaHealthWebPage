import React, { Component } from '../../node_modules/react';
//import logo from './logo.jpg';

import './BodySectionLanding.css';
import img1 from './images/phramcy2.png'


class BodySectionLanding extends Component{
    constructor(props){
        super(props);
        this.clicked = this.clicked.bind(this);
        this.state = {
            patient : props.patient,
            pharmisist : props.pharmisist
        }
        this.props = props;

    }


    componentDidMount(){
        //any function
    }


    clicked = (e) => {
        e.preventDefault();
        this.setState({patient : "true"});
        
        //console.log(this.state,this.props)
        //window.location = "/register"
    } 


  render(){
    return (
        <div className="site-blocks-cover" style={{overflow: "hidden"}}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                <div className="col-md-12 aos-init aos-animate" style={{position:"relative"}} data-aos="fade-up" data-aos-delay="200">
                    <img src={img1} alt="phramcy" className="img-fluid img-absolute"/>
                    <div className="row mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-6 mr-auto">
                        <h1>LET US CARE ABOUT YOUR MEDICIEN</h1>
                        <div className="row mb-4 aos-init aos-animate">
                            <div className="col-lg-6 mr-auto">
                                <p className="mb-5">If you are having trouble of getting your medicien. We deliver your medicien right on to the foot step of your door.</p>
                                <div>
                                <a  onClick={this.props.clicked}  patient={this.state.patient}  pharmisist={this.state.pharmisist} className="btn btn-primary mr-2 mb-2 personButtonsLanding">I am a patient</a>
                                </div>
                            </div>
                            <div className="col-lg-6 mr-auto">
                                <p className="mb-5">If you are having trouble of getting your medicien. We deliver your medicien right on to the foot step of your door.</p>
                                <div>
                                <a href="/register" className="btn btn-primary mr-2 mb-2 personButtonsLanding">I am a pharmacist</a>
                                </div>
                            </div>
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
