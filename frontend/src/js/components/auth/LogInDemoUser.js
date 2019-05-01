//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import LogInIcon from '@material-ui/icons/Lock';
import { Button } from '../material';
import { withDemoUser, withStyles } from '../../containers';

const styles = theme => ({
  demoButton: {
    margin: theme.spacing.unit,
    width: '90%',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const WrappedComponent = ({
  variant,
  classes,
  handleClick,
  label,
  ...props,
}) => {
  return (
    <Button
      variant={variant}
      fullWidth
      className={classes.demoButton}
      onClick={handleClick}
    >
      {label || 'Log In As Demo User'}
      <LogInIcon fontSize="small" className={classes.rightIcon} />
    </Button>
  );
};

export const LogInDemoUser = withStyles(styles)(withDemoUser(WrappedComponent));
