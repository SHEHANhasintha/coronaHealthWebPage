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
	      //console.log(res);
	      //console.log(context);
	      let thita = {}

	      thita.email = res.Tt.Du;
	      //thita.accessToken = res.accessToken;

	      //console.log(thita,"kkkkkk");
/*
	      console.log(thita,process.env.REACT_APP_APPLICATION_PROXY+ "/auth/local");*/
	      axios
	        .post("/auth/google",thita)
	        .then((res) => console.log(res))
	        .catch((err) => console.log(err))
	      //await resolve(cb());
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
					    clientId={process.env.REACT_APP_GOOGLE_ID}
					    buttonText="Login"
					    onClick = {this.clicked}
					    onSuccess={(res) => this.responseGoogle(res,context)}
					    onFailure={this.responseGoogle}
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