//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Drawer as D } from '../material';
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

const StyledDrawer = ({
  anchor,
  showModal,
  handleClose,
  children,
  classes,
  ...props,
}) => {
  return (
    <D anchor={anchor} open={showModal} onClose={handleClose}>
      <div className={classes.list}>{children}</div>
    </D>
  );
};

export const Drawer = withStyles(styles)(StyledDrawer);
