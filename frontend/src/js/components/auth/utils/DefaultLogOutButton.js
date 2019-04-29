//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Button, LogOutIcon } from '../../material';
import { withStyles } from '../../../containers';

const styles = theme => ({
  logoutButton: {
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
      variant="outlined"
      fullWidth
      className={classes.logoutButton}
      onClick={handleClick}
    >
      Log Out
      <LogOutIcon fontSize="small" className={classes.rightIcon} />
    </Button>
  );
};

export const DefaultLogOutButton = withStyles(styles)(Wrapper);
