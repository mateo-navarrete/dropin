//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Button } from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  redButton: {
    color: '#FFF',
    backgroundColor: '#FB364A',
    '&:hover': {
      backgroundColor: '#af2533',
      borderColor: '#FB364A',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FB364A',
      borderColor: '#FB364A',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      outline: 'none',
    },
  },
});

const WrappedComponent = ({ classes, children, ...props }) => {
  return (
    <Button variant="contained" size="large" className={classes.redButton}>
      {children}
    </Button>
  );
};

export const ButtonWrapper = withStyles(styles)(WrappedComponent);
