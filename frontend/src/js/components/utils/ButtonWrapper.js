import React from 'react';
import { Button } from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  root: {
    color: theme.palette.getContrastText('#FB364A'),
    backgroundColor: '#FB364A',
    '&:hover': {
      backgroundColor: '#af2533',
    },
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
});

const Wrapper = ({ classes, children, ...props }) => {
  return (
    <Button variant="contained" size="large" className={classes.root}>
      {children}
    </Button>
  );
};

export const ButtonWrapper = withStyles(styles)(Wrapper);
