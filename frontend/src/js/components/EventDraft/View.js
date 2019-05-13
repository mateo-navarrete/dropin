//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { withStyles } from '../../containers';
// import { EventDraftForm } from './EventDraftForm';
import { EventStepper } from './EventStepper';

const styles = theme => ({
  main: {},
  paper: {},
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
    marginTop: theme.spacing.unit,
  },
  root: {
    // width: "90%"
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  icon: {
    color: theme.primary, //'red !important',
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
