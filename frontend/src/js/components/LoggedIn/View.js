//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { UserMenu } from '../UserMenu';
import { withStyles } from '../../containers';

const styles = theme => ({
  list: {
    width: 350, //250,
    [theme.breakpoints.up('310')]: {
      width: 310,
    },
    [theme.breakpoints.up('370')]: {
      width: 360,
    },
    [theme.breakpoints.up(400 + theme.spacing.unit)]: {
      width: 400,
    },
  },
});

const WrappedComponent = ({ classes, handleClose }) => {
  return (
    <div className={classes.list}>
      <UserMenu handleClose={handleClose} />
    </div>
  );
};

export const View = withStyles(styles)(WrappedComponent);
