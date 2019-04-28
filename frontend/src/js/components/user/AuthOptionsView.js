//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import {
  Button,
  SignUpIcon,
  LogInIcon,
  LoggedOutIcon,
  Divider
} from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  list: {
    width: 350, //250,
    [theme.breakpoints.up('310')]: {
      width: 310,
    },
    [theme.breakpoints.up('370')]: {
      width: 360,
    },
    [theme.breakpoints.up(400 + theme.spacing.unit)]: {
      width: 400,
    },
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('310')]: {
      width: 310,
    },
    [theme.breakpoints.up('370')]: {
      width: 360,
    },
    [theme.breakpoints.up(400 + theme.spacing.unit)]: {
      width: 400,
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
  },
  redButton: {
    margin: theme.spacing.unit,
    color: '#FFF',
    backgroundColor: '#FB364A',
    width: '90%',
    '&:hover': {
      backgroundColor: '#af2533',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FB364A',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
  blueButton: {
    margin: theme.spacing.unit,
    color: '#FFF',
    backgroundColor: '#2980B9',
    width: '90%',
    '&:hover': {
      backgroundColor: '#1c5981',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#2980B9',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
  // leftIcon: {
  //   marginRight: theme.spacing.unit,
  // },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const Wrapper = ({ classes, ...props }) => {
  return (
    <F>
      <Button
        variant="contained"
        fullWidth
        className={classes.redButton}
        href="./new"
      >
        Sign Up
        <SignUpIcon fontSize="small" className={classes.rightIcon} />
      </Button>
      <div className="flex align center">
        <Divider style={{ width: '35%' }} />
        <div style={{ marginLeft: '5%', marginRight: '5%' }}>or</div>
        <Divider style={{ width: '35%' }} />
      </div>
      <Button
        variant="contained"
        fullWidth
        className={classes.blueButton}
        href="./login"
      >
        Log In
        <LogInIcon fontSize="small" className={classes.rightIcon} />
      </Button>
      <div className="flex align center">
        <Divider style={{ width: '35%' }} />
        <div style={{ marginLeft: '5%', marginRight: '5%' }}>or</div>
        <Divider style={{ width: '35%' }} />
      </div>
      <Button
        variant="contained"
        fullWidth
        style={{ margin: '8px', width: '90%' }}
        // href="./login"
      >
        Log In As Demo User
        <LoggedOutIcon fontSize="small" className={classes.rightIcon} />
      </Button>
    </F>
  );
};

export const AuthOptionsView = withStyles(styles)(Wrapper);
