import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLg from 'react-google-login';
import './google.css';
import axios from 'axios';

class FacebookLogin extends Component{
	constructor(props){
		super(props);
		this.responseGoogle = this.responseGoogle.bind(this);
	}

	responseGoogle = (res) => {
		console.log(res.Tt.Du);

	}

	clicked = () => {
		console.log("clicked");

	}

	render(){
		return(
			<div>
				<GoogleLg
				    clientId={process.env.REACT_APP_GOOGLE_ID}
				    buttonText="Login"
				    onClick = {this.clicked}
				    onSuccess={this.responseGoogle}
				    onFailure={this.responseGoogle}
				    cookiePolicy={'single_host_origin'} 
					cssClass="my-Google-button-class loginBtn--google"
				    />
			</div>
		);
	}

}


export default FacebookLogin;