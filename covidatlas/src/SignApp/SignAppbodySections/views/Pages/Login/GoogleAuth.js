import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


const responseGoogle = (response) => {
    console.log(response);
  }
   
class GoogleAuth extends Component{

    render(){
      return(
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          style={{color : "#fff"}}
          onClick={console.log("ddddd")}
        
        />
      );
    }

}



  export default GoogleAuth;