//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { withStyles } from '../../containers';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

const WrappedComponent = ({ classes, height, ...props }) => {
  return (
    <div className={classes.grow}>
      <img
        src={require(`../../../assets/logo-red.png`)}
        alt="dropin"
        height={height - 20}
        width={height * 2 - 40}
      />
    </div>
  );
};

export const LogoHeader = withStyles(styles)(WrappedComponent);
