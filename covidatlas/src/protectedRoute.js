import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { Runner } from './help';


export const ProtectedRoute = ({ component: Component, ...rest },props) => {
    


    return (
   <AuthContext.Consumer>
    {(context) => 
      <Route {...rest} render={props => {


        if (localStorage.getItem('exp') > (Date.now() / 1000) && localStorage.getItem('token')){
          if (localStorage.getItem('isAuthenticated')){
            return(<Component {...props}/>) 
          }else{
            props.history.push('./login')
          }          
        }else{
            localStorage.setItem('exp', false);
            props.history.push('./login')
        }



    }
        
	}/>}
	</AuthContext.Consumer>
	)
}



