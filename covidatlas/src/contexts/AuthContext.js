import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = { 
        isAuthenticated: false,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        repeatPassword: '',
        licenceCheckOut: false,
        validation: false,
        emialFail:false
      }

  toggleAuth = async(value) => {
    await this.setState((state) => {
      return {isAuthenticated: value}
    });
  }

  toggleValidation = async(value) => {
    await this.setState((state) => {
      return {validation: value}
    });
    //console.log(this.state);
  }

  updateEmailFail = async(value) => {
    await this.setState((state) => {
      return {emialFail : value}
    });
    console.log(this.state)

  }  

  updateEmail = async(emailEntered) => {
    await this.setState((state) => {
      return {email : emailEntered}
    });
    //console.log(this.state)

  }

  updatePassword = async(passEntered) => {
    await this.setState((state) => {
      return {password : passEntered}
    })
    //console.log(this.state);
  }

  updateRepeatPassword = async(repeatPassEntered) => {
    await this.setState((state) => {
      return {repeatPassword : repeatPassEntered}
    })
    //console.log(this.state);
  }

  updateFirstName = async(firstNameEntered) => {
    await this.setState((state) => {
      return {firstName : firstNameEntered}
    });
    //console.log(this.state)

  }

  updateLastName = async(lastNameEntered) => {
    await this.setState((state) => {
      return {lastName : lastNameEntered}
    });
    //console.log(this.state)

  }

  updateLicenseCheck = async() => {
    await this.setState((state) => {
      return {licenceCheckOut : !state.licenceCheckOut}
    });
    //console.log(this.state)

  }

  render() { 
    return (
      <AuthContext.Provider value={{...this.state,
        toggleAuth: this.toggleAuth,
        updateEmail: this.updateEmail, 
        updatePassword: this.updatePassword,
        updateFirstName: this.updateFirstName,
        updateLastName: this.updateLastName,
        updateRepeatPassword: this.updateRepeatPassword,
        toggleValidation: this.toggleValidation,
        updateLicenseCheck: this.updateLicenseCheck,
        updateEmailFail: this.updateEmailFail
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
 
export default AuthContextProvider;
