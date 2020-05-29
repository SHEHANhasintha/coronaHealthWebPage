import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
   <AuthContext.Consumer>
    {(context) => 
      <Route {...rest} render={props => {
      	console.log(context.isAuthenticated,"fdfdfdfdfdffdfdfdg");
      	if (context.isAuthenticated){
      		return(<Component {...props}/>) 
      	}else{
      		props.history.push('./login')
      	}
        
	}}/>}
	</AuthContext.Consumer>
	)
}



