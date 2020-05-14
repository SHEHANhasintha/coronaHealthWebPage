import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLg from 'react-google-login';


class FacebookLogin extends Component{
	constructor(props){
		super(props);
		this.responseGoogle = this.responseGoogle.bind(this);

	}

	responseGoogle = (res) => {
		console.log(res);

	}

	clicked = () => {
		console.log("clicked");

	}

//client: 336956677618-ve5259b70qqsff8b9n2cua0tq5llaehd.apps.googleusercontent.com
//client secret: jN-zSgzJ13i92Bfh4jxlWozm


	render(){
		return(
			<div>
				<GoogleLg
				    clientId="336956677618-qatmh1dqudm3b6isa9gu0ajk2aeec6la.apps.googleusercontent.com"
				    buttonText="Login"
				    onClick = {this.clicked}
				    onSuccess={this.responseGoogle}
				    onFailure={this.responseGoogle}
				    cookiePolicy={'single_host_origin'} />
			</div>
		);
	}

}


export default FacebookLogin;