//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Button, LogInIcon } from '../../material';
import { withDemoUser, withStyles } from '../../../containers';

const styles = theme => ({
  demoButton: {
    margin: theme.spacing.unit,
    width: '90%',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const Wrapper = ({ classes, loginDemoUser, ...props }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      className={classes.demoButton}
      onClick={loginDemoUser}
    >
      Log In As Demo User
      <LogInIcon fontSize="small" className={classes.rightIcon} />
    </Button>
  );
};

export const LogInDemoUser = withStyles(styles)(withDemoUser(Wrapper));
