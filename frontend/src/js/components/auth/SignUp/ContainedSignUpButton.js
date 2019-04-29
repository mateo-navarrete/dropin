//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Button, SignUpIcon } from '../../material';
import { withStyles } from '../../../containers';

const styles = theme => ({
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
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const Wrapper = ({ classes, handleClick, ...props }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      className={classes.redButton}
      onClick={handleClick}
    >
      Sign Up
      <SignUpIcon fontSize="small" className={classes.rightIcon} />
    </Button>
  );
};

export const ContainedSignUpButton = withStyles(styles)(Wrapper);
