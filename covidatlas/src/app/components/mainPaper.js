import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


import PrescriptionCard from './PrescriptionCard.js'
import ItemExpantionPanel from './itemExpantionPanel'
import ButtonSet from './ButtonSet'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      //margin: theme.spacing(1),

    },
  },
}));

export default function MainPaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      
   
    <div style={{ width: '100%' }}>

      <Box display="flex" flexDirection="row" bgcolor="background.paper" >
        <Box bgcolor="grey.300">
          <ButtonSet />
        </Box>
      </Box>

      <Box display="flex" flexDirection="row"  bgcolor="background.paper" justifyContent="space-between">




      <Box display="flex" flexDirection="row" bgcolor="background.paper">
        <Box bgcolor="grey.300">
          <ItemExpantionPanel />
        </Box>
      </Box>

      <Box display="flex"  bgcolor="background.paper">
        <Box bgcolor="grey.300">
          <PrescriptionCard/>
        </Box>
      </Box>

      </Box>
    </div>



{/*
    <div style={{ width: '100%' }}>
    <Box display="flex" flexDirection="row"  justifyContent="space-between">
      <Box display="flex" flexDirection="row" alignItems="center">
          <PrescriptionCard/>
          <PrescriptionCard/>
          <PrescriptionCard/>  
      </Box>
      <Box display="flex" alignItems="center" >
          <PrescriptionCard/>
          <PrescriptionCard/>
      </Box>  
    </div>   
      */}


    </div>
  );
}
