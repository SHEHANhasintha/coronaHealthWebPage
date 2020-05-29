import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    email: false,
    firstName: false,
    lastName: false,
    password: false,
    repeatPassword:false,
    licenceCheckOut:false,
    light: { syntax: '#555', ui: '#ddd0', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#f001', bg: '#555'}
  }


  toggleTheme = async(isLightThemeValue,
                      regexEmailValue,
                      regexFirstNameValue,
                      regexLastNameValue,
                      regexPasswordValue,
                      regexRepeatPassword,validLicenceCheckOut) => {
    await this.setState((state) => {
      return {
        isLightTheme: isLightThemeValue,
        email: regexEmailValue,
        firstName: regexFirstNameValue,
        lastName: regexLastNameValue,
        password: regexPasswordValue,
        repeatPassword: regexRepeatPassword,
        licenceCheckOut:validLicenceCheckOut
      }
    });
    console.log(this.state);
  }

  render() { 
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;
