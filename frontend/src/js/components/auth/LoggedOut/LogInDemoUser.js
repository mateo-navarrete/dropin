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
//["text","outlined","contained"]
const WrappedComponent = ({ buttonType, classes, loginDemoUser, label, ...props }) => {
  return (
    <Button
      variant={buttonType}
      fullWidth
      className={classes.demoButton}
      onClick={loginDemoUser}
    >
      {label || 'Log In As Demo User'}
      <LogInIcon fontSize="small" className={classes.rightIcon} />
    </Button>
  );
};

export const LogInDemoUser = withStyles(styles)(withDemoUser(WrappedComponent));
