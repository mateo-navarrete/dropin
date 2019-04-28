import React from 'react';
import { Button } from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  button: {
    color: theme.palette.getContrastText('#FB364A'),
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

const Wrapper = ({ classes, children, ...props }) => {
  return (
    <Button variant="contained" size="large" className={classes.button}>
      {children}
    </Button>
  );
};

export const ButtonWrapper = withStyles(styles)(Wrapper);
