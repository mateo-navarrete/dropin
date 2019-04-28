import React from 'react';
import { Button } from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  cssRoot: {
    color: theme.palette.getContrastText('rgba(251, 54, 74, 1)'),
    backgroundColor: 'rgba(251, 54, 74, 1)',
    '&:hover': {
      backgroundColor: 'rgba(201, 4, 24, 1)',
    },
  },
});

const Wrapper = ({ classes, children, ...props }) => {
  return (
    <Button variant="contained" className={classes.cssRoot}>
      {children}
    </Button>
  );
};

export const ButtonWrapper = withStyles(styles)(Wrapper);
