//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { withStyles } from '../../containers';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

const WrappedComponent = ({ classes, height, isCompact, ...props }) => {
  return (
    <div className={classes.grow}>
      <div className={isCompact ? '' : 'flex'}>
        <img
          src={require(`../../../assets/logo-red.png`)}
          alt="dropin"
          height={height - 20}
          width={height * 2 - 40}
        />
      </div>
    </div>
  );
};

export const LogoHeader = withStyles(styles)(WrappedComponent);
