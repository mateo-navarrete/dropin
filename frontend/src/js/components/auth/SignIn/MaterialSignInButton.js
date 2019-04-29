//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Button, LogInIcon } from '../../material';
import { withStyles } from '../../../containers';

const styles = theme => ({
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
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const WrappedComponent = ({ classes, handleClick, ...props }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      className={classes.blueButton}
      onClick={handleClick}
    >
      Log In
      <LogInIcon fontSize="small" className={classes.rightIcon} />
    </Button>
  );
};

export const MaterialSignInButton = withStyles(styles)(WrappedComponent);
