import React, { Component } from 'react';
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


//const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
//const DefaultLayout = React.lazy(() => import('./SignApp/SignAppbodySections/containers/DefaultLayout'));

// Pages
/*const Login = import('./SignApp/SignAppbodySections/views/Pages/Login');
const Register = import('./SignApp/SignAppbodySections/views/Pages/Register');
const Page404 =  import('./SignApp/SignAppbodySections/views/Pages/Page404');
const Page500 = import('./SignApp/SignAppbodySections/views/Pages/Page500');*/


class App extends Component{
  state = { users: [] }

  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));

  };

  render(){
    return ( 
      <div className="App">
       {/* <Router>
        <Route path="/" exact component={HomePageHeader} />
        <Route path="/login" exact component={HomePageHeader} />
        <Route path="/" exact component={Body} />
        <Route path="/login" exact component={SignBody} />
        <Footer />
       </Router>*/}


        <Router>
          <React.Suspense fallback={loading()}>
            {/*<Switch>*/}
            <Route path="/"  name="Home" component={HomePageHeader} />
            
              {/*<Route path="/login" exact component={HomePageHeader} />*/}
              <Route path="/" exact  name="Home" component={Body} />
             

              <Route path="/login" exact name="Login Page" render={props => <Login {...props}/>} />
              <Route path="/register" exact name="Register Page" render={props => <Register {...props}/>} />
              <Route path="/404" exact name="Page 404" render={props => <Page404 {...props}/>} />
              <Route path="/500" exact name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/profile" exact name="profile" render={props => <DefaultLayout {...props}/>} />

              
              
              
              {/*<Route path="/login" exact component={SignBody} />*/}
              <Footer />

            {/*</Switch>*/}
          </React.Suspense>
      </Router>



        {/* 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            CovidAtlas - we will care about your medicine!
          </p>
          <ul>
            {this.state.users.map(user => 
              <li key={user.id}>{user.username}</li>)}
          </ul>
        </header>
        */}
      </div>
    );
  }
}

export default App;
