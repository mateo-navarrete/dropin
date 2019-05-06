//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Modal as M } from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
});

const StyledModal = ({
  showModal,
  handleClose,
  children,
  classes,
  ...props,
}) => {
  return (
    <M
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={showModal}
      onClose={handleClose}
    >
      <div className={classes.paper}>{children}</div>
    </M>
  );
};

export const Modal = withStyles(styles)(StyledModal);
