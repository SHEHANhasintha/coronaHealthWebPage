import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLg from 'react-facebook-login';
import './Facebook.css';
import axios from 'axios';

import { AuthContext } from './../../contexts/AuthContext';
import { postData } from './../../../handleBars/helper'

let fbId = process.env.REACT_APP_FACEBOOK_ID;


class FacebookLogin extends Component{
	constructor(props){
		super(props);
		this.props = props;
		this.responseFacebook = this.responseFacebook.bind(this);
	}

	responseFacebook = (res,context) => {
	    return(new Promise(async(resolve,reject) => {
	      console.log(res);

	      let thita = {}

	      thita.email = res.email;
	      thita.accessToken = res.accessToken;
	      thita.firstName = res.name;
	      thita.usreId = res.id;
	      thita.picture = res.picture.data.url;




      postData(`/auth${context.loc}/facebook`,thita)
        .then((res) => {
          console.log(res);

	      console.log(thita);
	      axios
	        .post(`/auth${context.loc}/facebook`,thita)
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
              console.log(this.props);
              this.props.props.history.push('/app')
            }
          })
          .catch((err) => {
            console.log(err)
            //updateEmailFail(true);
            })

        })
        .catch((err) => {
          console.log(err)
          updateEmailFail(true);
        })

	    }))
	}

	render(){
		return(
			 <AuthContext.Consumer>
				  {(context) => 
					<div>
				  	
						<FacebookLg 
						appId={fbId}
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