import React, {useState, useEffect, useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';


import Header from './../headerSections/HomePageHeader';
import Footer from './../footer/Footer';
import FaceBook from './../thirdParty/FacebookLogin/FacebookLogin';
import GoogleLogin from './../thirdParty/GoogleLogin/GoogleLogin';

import axios from 'axios';

import { AuthContext } from './../contexts/AuthContext';
import { ThemeContext } from './../contexts/ThemeContext';
import ReactFormInputValidation from 'react-form-input-validation';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://covidatlas.herokuapp.com/">
        covidatlas
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


let useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    },
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    }
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(2, 4),
    display: 'flex',
    padding: '100px 0px',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  toggleBackground: {
    backgroundColor: '#f00'
  },
  toggleBack: {
    backgroundColor: '#0f0'
  }
}));


export default function SignInSide(props) {
  const classes = useStyles();

  function filter(images){
    return (new Promise((resolve,reject) => {
    let num = Math.floor(Math.random() * Math.floor(30));
    //full: raw: regular: small: thumb: 
    let image = images.results[num].urls.regular;
      resolve(image);
    }))
  }

  useEffect(() => {
      axios.get(url)
        .then(res => res.data)
        .then(dataArr => filter(dataArr))
        .then(imgUrl => setbackground(imgUrl))
  },[background]);

  const submitCredentials = (e,context,cb,toggleTheme,updateEmailFail) => {
    e.preventDefault();
    //callback function would be to call toggleAuth
    return(new Promise(async(resolve,reject) => {
      
      let thita = {}
      thita.firstName = context.firstName;
      thita.lastName = context.lastName;
      thita.agreement = context.licenceCheckOut;
      thita.email = context.email;
      thita.password = context.password;

      checkValidation(context,cb,toggleTheme)

       if (context.validation){ 
        axios
          .post(`/auth${context.loc}/local`,thita)
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

              props.history.push('/app')
            }
          })
          .catch((err) => {
            console.log(err)
            updateEmailFail(true);
            })
      }


    }))
  }

  const handleChangeEmailField = (e,cb,context) => {
    e.preventDefault();
    //callback function would be to call updateEmail
    return(new Promise(async(resolve,reject) => {
      await resolve(cb(e.target.value.trim()));
    }))
  }

  const handleChangePasswordFiled = (e,cb,context) => {
    e.preventDefault();
    //callback function would be to call updatePassword
    return(new Promise(async(resolve,reject) => {
      await resolve(cb(e.target.value.trim()))
    }))
  } 

  const handleChangefirstNameField = (e,cb,context) => {
    e.preventDefault();
    //callback function would be to call updateEmail
    return(new Promise(async(resolve,reject) => {
      await resolve(cb(e.target.value.trim()));
    }))
  }

  const handleChangeLastNameField = (e,cb,context) => {
    e.preventDefault();
    //callback function would be to call updatePassword
    return(new Promise(async(resolve,reject) => {
      await resolve(cb(e.target.value.trim()))
    }))
  } 

  const handleChangeRepeatPasswordFiled = (e,cb,context) => {
    e.preventDefault();
    //callback function would be to call updatePassword
    return(new Promise(async(resolve,reject) => {
      await resolve(cb(e.target.value.trim()))
    }))
  } 

  const handleChangeLicenceCheckbox = (e,cb,context) => {
    e.preventDefault();
    //callback function would be to call updatePassword
    return(new Promise(async(resolve,reject) => {
      await resolve(cb())
    }))
  }

  let cls = {
    backgroundColor : '#f00'
  }

  const checkValidation = (context,cb,toggleTheme) => {

    var regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var regexFirstName = new RegExp(/[a-z]{1,10}/);
    var regexLastName = new RegExp(/[a-z]{1,10}/);
    var regexPassword = new RegExp(/(?=^.{6,255}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/);

    var validRegexEmail = regexEmail.test(context.email);
    var validRegexFirstName = regexFirstName.test(context.firstName);
    var validRegexLastName = regexLastName.test(context.lastName);
    var validRegexPassword = regexPassword.test(context.password);
    var validRegexRepeatPassword;
    var validLicenceCheckOut = context.licenceCheckOut;

    if (context.password == context.repeatPassword){
      validRegexRepeatPassword = true
    }else{
      validRegexRepeatPassword = false
    }

    //console.log(validRegexEmail,validRegexFirstName,validRegexLastName,validRegexPassword,validRegexRepeatPassword,validLicenceCheckOut);

    if (!validRegexEmail &&
     !validRegexFirstName &&
     !validRegexLastName &&
     !validRegexPassword &&
     !validRegexRepeatPassword && 
     !validLicenceCheckOut){
      cb(false);
    }else{
      cb(true);
    }

    toggleTheme(true,
      !validRegexEmail,
      !validRegexFirstName,
      !validRegexLastName,
      !validRegexPassword,
      !validRegexRepeatPassword,
      !validLicenceCheckOut
      );
    
  }


  var url = 'https://api.unsplash.com/search/photos?page=1&per_page=30&query=pills&client_id=eA8h1lVdYjJhbv2pSPaB5PDStYH-7dkJRBOz5YWV1dI'
  var [background,setbackground] = useState('https://api.unsplash.com/photos/random?client_id=eA8h1lVdYjJhbv2pSPaB5PDStYH-7dkJRBOz5YWV1dI');

  let theme;
  let isLightTheme, light, dark;

  const themeContextTogglerStart = (themeContext) => {

    isLightTheme= themeContext.isLightTheme;
    light= themeContext.light;
    dark= themeContext.dark;
    theme = isLightTheme ? light : dark;
  }

  const messageEmialFail = (context,themeContext) => {

    if (context.emailFail){
      console.log("there we are");
      return ("Email is already in use");
    }

    if (themeContext.email){
      return ("Email is required")
    }else{
     return false;
    }
  }


  const themeContextToggler = (themeContextValue,themeContext) => {

    switch (themeContextValue){
      case 'firstName':
        if (themeContext.firstName) return dark.ui;
        else return light.ui;

      case 'lastName':
        if (themeContext.lastName) return dark.ui;
        else return light.ui;

      case 'password':
        if (themeContext.password) return dark.ui;
        else return light.ui;

      case 'email':
        if (themeContext.email) return dark.ui;
        else return light.ui;

      case 'repeatPassword':
        if (themeContext.repeatPassword) return dark.ui;
        else return light.ui;

      case 'license':
        console.log(themeContext.licenceCheckOut);
        if (themeContext.licenceCheckOut) return dark.ui;
        else return light.ui;
         
      default:
        return light.ui;
    }

  }


  const addContextWindowLocation = (locationWindow) => {
    return locationWindow('/signup');
  }

  const contextValue = useContext(AuthContext);


  useEffect(function() {
    contextValue.locationWindow('/signup')
  }, []);

  const [open, setOpen] = React.useState(true);
  //const [st,bt] = React.useContext(context)
  //console.log(open)

  return (
   <AuthContext.Consumer>
    {(context) => 
      <ThemeContext.Consumer>
      {(themeContext) => 
    <Grid container component="main" className={classes.root}>
    {themeContextTogglerStart(themeContext)}


      <Header/>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} style={{'backgroundImage':`url(${background})`}} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={themeContext.firstName}
                helperText={themeContext.firstName ? "First name is required" : false}
                onChange={(e) => handleChangefirstNameField(e,context.updateFirstName,context)}
                autoComplete="fname"
                name="firstName"
                variant="filled"
                required
                fullWidth
                id="firstName"
                label="First Name"
                style={{backgroundColor:themeContextToggler('firstName',themeContext)}}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={themeContext.lastName}
                helperText={themeContext.lastName ? "Last name is required" : false}
                onChange={(e) => handleChangeLastNameField(e,context.updateLastName,context)}
                variant="filled"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                style={{backgroundColor:themeContextToggler('lastName',themeContext)}}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={themeContext.email}
                helperText={messageEmialFail(context,themeContext)}
                onChange={(e) => handleChangeEmailField(e,context.updateEmail,context)}
                variant="filled"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                style={{backgroundColor:themeContextToggler('email',themeContext)}}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={themeContext.password}
                helperText={themeContext.password ? 
                " at least 1 upper case character, at least 1 lower case character, at least 1 numerical character, at least 1 special character"
                 : false}
                onChange={(e) => handleChangePasswordFiled(e,context.updatePassword,context)}
                variant="filled"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                style={{backgroundColor:themeContextToggler('password',themeContext)}}
                autoComplete="current-password"
              />
            </Grid>


            <Grid item xs={12}>
              <TextField
                error={themeContext.repeatPassword}
                helperText={themeContext.repeatPassword ? "Confirm Password" : false}
                onChange={(e) => handleChangeRepeatPasswordFiled(e,context.updateRepeatPassword,context)}
                variant="filled"
                required
                fullWidth
                className={classes.stylesToggleFill}
                name="repeatPassword"
                label="repeatPassword"
                type="password"
                style={{backgroundColor:themeContextToggler('repeatPassword',themeContext)}}
                id="repeatPassword"
                autoComplete="current-password"

              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" onChange={(e) => handleChangeLicenceCheckbox(e,context.updateLicenseCheck,context)} color="primary" style={{backgroundColor:themeContextToggler('license',themeContext)}}/>}
                label="I agree to the CovidAtlas Terms of Services and Privacy policy."
              />
          <Link href="#" color="inherit">
           learn more
          </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => submitCredentials(e,context,context.toggleValidation,themeContext.toggleTheme,context.updateEmailFail)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        </div>
        <FaceBook props={props}/>
        <GoogleLogin props={props}/>
        <Footer/>
      </Grid>
    </Grid>
}
</ThemeContext.Consumer> 
} 
</AuthContext.Consumer>
  );
}