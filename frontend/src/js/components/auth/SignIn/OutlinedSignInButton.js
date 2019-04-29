//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Button, LogInIcon } from '../../material';
import { withStyles } from '../../../containers';

const styles = theme => ({
  blueButton: {
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

const Wrapper = ({ classes, handleClick, ...props }) => {
  return (
    <Button
      variant="outlined"
      className={classes.blueButton}
      onClick={handleClick}
    >
      Log In
      <LogInIcon fontSize="small" className={classes.rightIcon} />
    </Button>
  );
};

export const OutlinedSignInButton = withStyles(styles)(Wrapper);
