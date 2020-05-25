import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = { 
        isAuthenticated: false,
        email: '',
        password: ''
      }

  toggleAuth = async() => {
    await this.setState((state) => {
      return {isAuthenticated: !state.isAuthenticated}
    });
    console.log(this.state);
  }

  updateEmail = async(emailEntered) => {
    await this.setState((state) => {
      return {email : emailEntered}
    });
    console.log(this.state)

  }

  updatePassword = async(passEntered) => {
    await this.setState((state) => {
      return {password : passEntered}
    })
    console.log(this.state);

  }

  render() { 
    return (
      <AuthContext.Provider value={{...this.state,
        toggleAuth: this.toggleAuth,
        updateEmail: this.updateEmail, 
        updatePassword: this.updatePassword
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
 
export default AuthContextProvider;
