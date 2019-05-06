//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Button as B, ClearIcon } from '../material';
import { withStyles } from '../../containers';

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

const WrappedComponent = ({ classes, handleClose }) => {
  return (
    <B
      variant="outlined"
      color="secondary"
      className={classes.button}
      onClick={handleClose}
    >
      Close
      <ClearIcon className={classes.rightIcon} />
    </B>
  );
};

export const Button = withStyles(styles)(WrappedComponent);
