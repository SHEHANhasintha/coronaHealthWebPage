import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLg from 'react-google-login';
import './google.css';
import axios from 'axios';

import { AuthContext } from './../../contexts/AuthContext';

class FacebookLogin extends Component{
	constructor(props){
		super(props);
		this.props = props;
		this.responseGoogle = this.responseGoogle.bind(this);
	}

	responseGoogle = (res,context) => {
	    return(new Promise(async(resolve,reject) => {
	    	console.log(res.profileObj.email);
	      let thita = {}
	      thita.email = res.profileObj.email;
	      axios
	        .post(`http://localhost:5000/auth${context.loc}/google`,thita)
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

              this.props.history.push('/app')
            }
          })
          .catch((err) => {
            console.log(err)
            //updateEmailFail(true);
            })
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