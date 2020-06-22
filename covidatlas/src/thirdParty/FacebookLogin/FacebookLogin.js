import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLg from 'react-facebook-login';
import './Facebook.css';
import axios from 'axios';

import { AuthContext } from './../../contexts/AuthContext';

let fbId = process.env.REACT_APP_FACEBOOK_ID;


export default function FacebookLogin(props) {


	const responseFacebook = (res,context) => {
	    return(new Promise(async(resolve,reject) => {
	      //console.log(res);
	      //console.log(context);
	      let thita = {}

	      thita.email = res.email;
	      thita.accessToken = res.accessToken;

	      console.log(props);
/*
	      console.log(thita,process.env.REACT_APP_APPLICATION_PROXY+ "/auth/local");*/
	      axios
	        .post(`http://localhost:5000/auth${context.loc}/facebook`,thita)
          .then((res) => {
            console.log(res)
            if (res.status == 200){
              //toggleAuth(true)
              localStorage.setItem('email', res.data.login.email);
              localStorage.setItem('firstName', res.data.login.firstName);
              localStorage.setItem('lastName', res.data.login.lastName);
              localStorage.setItem('token', res.data.tokenData.token);
              localStorage.setItem('iat', res.data.tokenData.iat);
              localStorage.setItem('exp', res.data.tokenData.exp);
              localStorage.setItem('isAuthenticated', true);

              props.history.push('/app')
            }else{
            	
            	console.log("got 403");
            }
          })
          .catch((err) => {
            console.log(err)
            //updateEmailFail(true);
            })
	      //await resolve(cb());
	    }))
	}

	const clicked = () => {
		console.log("clicked");

	}
		return(
			 <AuthContext.Consumer>
				  {(context) => 
					<div>
						<FacebookLg 
						appId={fbId}
						autoLoad={false}
						fields="name,email,picture"
						onClick={clicked}
					
						callback={(res) => responseFacebook(res,context)} 
						cssClass="my-facebook-button-class"
						/>
					</div>
				}
			 </AuthContext.Consumer>

		);
	

}
