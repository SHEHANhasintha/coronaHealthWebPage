import React, { Component, useState, useEffect, useContext } from 'react';
import logo from './logo.jpg';
import './App.css';
import HomePageHeader from './headerSections/HomePageHeader.js';
import Body from './bodySections/Body.js';
import Footer from './footer/Footer';
import SignBody from './SignApp/SignAppbodySections/Body.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './SignApp/SignAppbodySections/App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./SignApp/SignAppbodySections/containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./SignApp/SignAppbodySections/views/Pages/Login'));
const Register = React.lazy(() => import('./SignApp/SignAppbodySections/views/Pages/Register'));
const Page404 = React.lazy(() => import('./SignApp/SignAppbodySections/views/Pages/Page404'));
const Page500 = React.lazy(() => import('./SignApp/SignAppbodySections/views/Pages/Page500'));

const Pageform = React.lazy(() => import('./SignApp/SignAppbodySections/views/Base/Forms/Forms'));
const ListGroups = React.lazy(() => import('./SignApp/SignAppbodySections/views/Base/ListGroups'));


function App(props){

  const state = { 
              users: [],
              patient : "false",
              pharmisist : "false"
            };

  const clicked = (e) => {
    e.preventDefault();

  }

  useEffect(function() {
    //input code here
  }, []);

    return ( 
          <div className="App">
            <Router>
              <React.Suspense fallback={loading()}>
                <Switch>
                    <Route path="/" exact  name="Home"  render={props => <HomePageHeader {...props} />}/>
                    <Route path="/register" exact  name="Home" component={HomePageHeader} />
                    <Route path="/login" exact  name="Home" component={HomePageHeader} />
                </Switch>
                  <Route path="/" exact  name="Home" render={props => <Body {...props} clicked={clicked} patient={state.patient} pharmisist={state.pharmisist}/>} />
                    <Switch>
                        <Route path="/login" exact name="Login Page" render={props => <Login {...props}/>} />
                        <Route path="/register" exact name="Register Page" render={props => <Register {...props}/>} />
                        <Route path="/404" exact name="Page 404" render={props => <Page404 {...props}/>} />
                        <Route path="/500" exact name="Page 500" render={props => <Page500 {...props}/>} />
                        <Route path="/profile" exact name="profile" render={props => <DefaultLayout {...props}/>} />
                        <Route path="/pff" exact name="pff" render={props => <Pageform {...props}/>} />              
                        <Route path="/lg" exact name="lg" render={props => <ListGroups {...props}/>} />     
                    </Switch>
                  <Footer />
              </React.Suspense>
            </Router>
          </div>
        );


}

export default App;

/*
class App extends Component{
   user = { name: 'Tania', loggedIn: true }
  static contextType = TryProvider; 
  constructor(props){
    super(props);
    //this.value = TryProvider
    this.state = { 
                users: [],
                patient : "false",
                pharmisist : "false"
              }
  }

  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
    this.clicked = this.clicked.bind(this);
  }

  patientState = () => {
    this.setState({
      patient : ""
    });
  }

  clicked = (e) => {
    e.preventDefault();
  }

  render(){
    console.log(this.context)
    return ( 
      <div className="App">
        <Router>
          <React.Suspense fallback={loading()}>
            <Switch>
              <TryProvider value={{...this.user}}>
                <Route path="/" exact  name="Home"  render={props => <HomePageHeader {...props} />}/>
                <Route path="/register" exact  name="Home" component={HomePageHeader} />
                <Route path="/login" exact  name="Home" component={HomePageHeader} />
              </TryProvider>
            </Switch>
              <Route path="/" exact  name="Home" render={props => <Body {...props} clicked={this.clicked} patient={this.state.patient} pharmisist={this.state.pharmisist}/>} />
                <Switch>
                  <TryProvider>
                    <Route path="/login" exact name="Login Page" render={props => <Login {...props}/>} />
                    <Route path="/register" exact name="Register Page" render={props => <Register {...props}/>} />
                    <Route path="/404" exact name="Page 404" render={props => <Page404 {...props}/>} />
                    <Route path="/500" exact name="Page 500" render={props => <Page500 {...props}/>} />
                    <Route path="/profile" exact name="profile" render={props => <DefaultLayout {...props}/>} />
                    <Route path="/pff" exact name="pff" render={props => <Pageform {...props}/>} />              
                    <Route path="/lg" exact name="lg" render={props => <ListGroups {...props}/>} />     
                  </TryProvider>
                </Switch>
              <Footer />
          </React.Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
*/





/*//const value  = useContext(TryProvider);
class App extends Component{
   user = { name: 'Tania', loggedIn: true }
  static contextType = TryProvider; 
  constructor(props){
    super(props);
    //this.value = TryProvider
    this.state = { 
                users: [],
                patient : "false",
                pharmisist : "false"
              }
  }

  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
    this.clicked = this.clicked.bind(this);
  }

  patientState = () => {
    this.setState({
      patient : ""
    });
  }

  clicked = (e) => {
    e.preventDefault();
  }

  render(){
    console.log(this.context)
    return ( 
      <div className="App">
        <Router>
          <React.Suspense fallback={loading()}>
            <Switch>
              <TryProvider value={{...this.user}}>
                <Route path="/" exact  name="Home"  render={props => <HomePageHeader {...props} />}/>
                <Route path="/register" exact  name="Home" component={HomePageHeader} />
                <Route path="/login" exact  name="Home" component={HomePageHeader} />
              </TryProvider>
            </Switch>
              <Route path="/" exact  name="Home" render={props => <Body {...props} clicked={this.clicked} patient={this.state.patient} pharmisist={this.state.pharmisist}/>} />
                <Switch>
                  <TryProvider>
                    <Route path="/login" exact name="Login Page" render={props => <Login {...props}/>} />
                    <Route path="/register" exact name="Register Page" render={props => <Register {...props}/>} />
                    <Route path="/404" exact name="Page 404" render={props => <Page404 {...props}/>} />
                    <Route path="/500" exact name="Page 500" render={props => <Page500 {...props}/>} />
                    <Route path="/profile" exact name="profile" render={props => <DefaultLayout {...props}/>} />
                    <Route path="/pff" exact name="pff" render={props => <Pageform {...props}/>} />              
                    <Route path="/lg" exact name="lg" render={props => <ListGroups {...props}/>} />     
                  </TryProvider>
                </Switch>
              <Footer />
          </React.Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
*/


