//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import LogInIcon from '@material-ui/icons/Lock';
import { Button as B } from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  containedButton: {
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
  outlinedButton: {
    margin: theme.spacing.unit,
    color: '#2980B9',
    borderColor: '#2980B9',
    '&:hover': {
      backgroundColor: '#5399c733',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#2980B9',
      color: '#FFF',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const WrappedComponent = ({ classes, disabled, variant, handleClick }) => {
  return (
    <B
      disabled={disabled}
      variant={variant}
      fullWidth={variant === 'contained'}
      className={classes[variant + 'Button']}
      onClick={handleClick}
    >
      Log In
      <LogInIcon fontSize="small" className={classes.rightIcon} />
    </B>
  );
};

export const Button = withStyles(styles)(WrappedComponent);
