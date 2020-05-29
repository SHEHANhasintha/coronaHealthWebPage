import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from './../headerSections/HomePageHeader';
import Footer from './../footer/Footer';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">

    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(18),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    height: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div>
    <Header/>

    <Container component="main" maxWidth="xs">
    
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VerifiedUserIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Verify User
        </Typography>

          <Button
            href="/login"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Go to Login
          </Button>
          <Grid container>

          </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      
    </Container>
    <Footer/>
    </div>
  );
}