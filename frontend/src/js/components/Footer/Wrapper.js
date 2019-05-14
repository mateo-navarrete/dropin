//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { AppBar, Toolbar } from '../material';
import { withStyles } from '../../containers';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const WrappedComponent = ({ children, classes, height, ...props }) => {
  return (
    <div className={classes.root} style={{ overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        style={{ margin: 0, height: height }}
      >
        <Toolbar
          style={{
            marginRight: 40,
            marginLeft: 40,
            height: height,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export const Wrapper = withStyles(styles)(WrappedComponent);
