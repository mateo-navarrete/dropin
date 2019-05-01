//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Button as B, LogOutIcon } from '../material';
import { withLogOut, withStyles } from '../../containers';

const styles = theme => ({
  button: {
    margin: '40px 20px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const WrappedComponent = ({ classes, handleClick }) => {
  return (
    <B variant="outlined" className={classes.button} onClick={handleClick}>
      Log Out
      <LogOutIcon fontSize="small" className={classes.rightIcon} />
    </B>
  );
};

export const Button = withStyles(styles)(withLogOut(WrappedComponent));
