import React from 'react';
import { AppBar, Toolbar } from '../material';
import { withStyles } from '../../containers';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const WrappedComponent = ({ children, classes, height, ...props }) => {
  const style = { height: height };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={style}>
        <Toolbar style={style}>{children}</Toolbar>
      </AppBar>
    </div>
  );
};

export const Wrapper = withStyles(styles)(WrappedComponent);
