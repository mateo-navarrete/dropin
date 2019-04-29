//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Button, SignUpIcon } from '../../material';
import { withStyles } from '../../../containers';

const styles = theme => ({
  redButton: {
    margin: theme.spacing.unit,
    color: '#FB364A',
    borderColor: '#FB364A',
    '&:hover': {
      backgroundColor: '#fb5e6e33',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FB364A',
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
      className={classes.redButton}
      onClick={handleClick}
    >
      Sign Up
      <SignUpIcon fontSize="small" className={classes.rightIcon} />
    </Button>
  );
};

export const OutlinedSignUpButton = withStyles(styles)(Wrapper);
