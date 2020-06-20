import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLg from 'react-facebook-login';
import './Facebook.css';
import axios from 'axios';

import { AuthContext } from './../../contexts/AuthContext';

class FacebookLogin extends Component{
	constructor(props){
		super(props);
		this.responseFacebook = this.responseFacebook.bind(this);
	}

	responseFacebook = (res,context) => {
	    return(new Promise(async(resolve,reject) => {
	      //console.log(res);
	      //console.log(context);
	      let thita = {}

	      thita.email = res.email;
	      thita.accessToken = res.accessToken;

	      console.log(process.env.REACT_APP_FACEBOOK_ID);
/*
	      console.log(thita,process.env.REACT_APP_APPLICATION_PROXY+ "/auth/local");*/
	      axios
	        .post("/auth/facebook",thita)
	        .then((res) => console.log(res))
	        .catch((err) => console.log(err))
	      //await resolve(cb());
	    }))
	}

	render(){
		return(
			 <AuthContext.Consumer>
				  {(context) => 
					<div>
						<FacebookLg 
						appId={process.env.REACT_APP_FACEBOOK_ID}
						autoLoad={false}
						fields="name,email,picture"
						onClick={this.componentClicked}
						callback={(res) => this.responseFacebook(res,context)} 
						cssClass="my-facebook-button-class"
						/>
					</div>
				}
			 </AuthContext.Consumer>

		);
	}

}


export default FacebookLogin;