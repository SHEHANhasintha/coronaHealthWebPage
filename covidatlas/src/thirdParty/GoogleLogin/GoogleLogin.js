import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLg from 'react-google-login';
import './google.css';
import axios from 'axios';

import { AuthContext } from './../../contexts/AuthContext';

class FacebookLogin extends Component{
	constructor(props){
		super(props);
		this.responseGoogle = this.responseGoogle.bind(this);
	}

	responseGoogle = (res,context) => {
	    return(new Promise(async(resolve,reject) => {
	    	console.log(res.profileObj.email);
	      let thita = {}
	      thita.email = res.profileObj.email;
	      axios
	        .post(`http://localhost:5000/auth${context.loc}/google`,thita)
	        .then((res) => console.log(res))
	        .catch((err) => console.log(err))
	    }))

	}

	clicked = () => {
		console.log("clicked");

	}

	render(){
		return(
			 <AuthContext.Consumer>
			 	{(context) => 
				<div>
					<GoogleLg
					    clientId={"336956677618-qatmh1dqudm3b6isa9gu0ajk2aeec6la.apps.googleusercontent.com"}
					    buttonText="Login"
					    onClick = {this.clicked}
					    onSuccess={(res) => this.responseGoogle(res,context)}
					    //onFailure={this.responseGoogle}
					    cookiePolicy={'single_host_origin'} 
						cssClass="my-Google-button-class loginBtn--google"
					    />
				</div>
				}
			 </AuthContext.Consumer>

		);
	}

}


export default FacebookLogin;