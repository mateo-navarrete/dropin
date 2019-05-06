//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { withStyles } from '../../../containers';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

const WrappedComponent = ({ classes, children, isCompact, ...props }) => {
  return (
    <div className={classes.grow}>
      <div className={isCompact ? '' : 'flex'}>{children}</div>
    </div>
  );
};

export const View = withStyles(styles)(WrappedComponent);
