import React from 'react';
import { withStyles } from '../../containers';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

const Wrapper = ({ color, height, ...props }) => {
  return (
    <img
      src={require(`../../../assets/logo-${color || 'red'}.png`)}
      alt="dropin"
      height={height - 20}
      width={height * 2 - 40}
    />
  );
};

export const Logo = withStyles(styles)(Wrapper);
