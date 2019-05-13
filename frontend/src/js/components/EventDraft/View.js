//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { withStyles } from '../../containers';
// import { EventDraftForm } from './EventDraftForm';
import { EventStepper } from './EventStepper';

const styles = theme => ({
  main: {},
  paper: {},
  cssLabel: {
    color: 'rgba(41, 128, 185, 1)',
    '&$cssFocused': {
      color: 'rgba(41, 128, 185, 1)',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'rgba(41, 128, 185, 1)',
    },
  },
  button: {
    backgroundColor: '#2980B9',
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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 0, //theme.spacing.unit,
  },
  root: {
    padding: 0,
    // color: 'rgba(41, 128, 185, 1)',
  },
  stepIcon: {
    color: 'rgba(41, 128, 185, 1)',
    // '&:active': {
    //   color: 'rgba(41, 128, 185, 1)',
    // },
  },
  stepLabel: {
    color: 'rgba(41, 128, 185, 1)',
    // '&:active': {
    //   color: 'rgba(41, 128, 185, 1)',
    // },
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  icon: {
    color: 'rgba(41, 128, 185, 1)', //'red !important',
  },
  iconed: {
    color: 'rgba(251, 54, 74, 1) !important', //"green !important"
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const WrappedComponent = props => {
  return <EventStepper {...props} />;
};

export const View = withStyles(styles)(WrappedComponent);
