//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Button, LoggedOutIcon } from '../../material';
import { withStyles } from '../../../containers';

const styles = theme => ({
  demoButton: {
    margin: theme.spacing.unit,
    width: '90%',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const Wrapper = ({ classes, handleClick, ...props }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      className={classes.demoButton}
      onClick={handleClick}
    >
      Log In As Demo User
      <LoggedOutIcon fontSize="small" className={classes.rightIcon} />
    </Button>
  );
};

export const DemoLogInButton = withStyles(styles)(Wrapper);
