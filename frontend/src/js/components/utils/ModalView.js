//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { withStyles } from '../../containers';
import { Modal } from '../material';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

const Wrapper = ({ modal, handleClick, children, classes, ...props }) => {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={modal}
      onClose={handleClick}
    >
      <div
        style={{ top: `50%`, left: `50%`, transform: `translate(-50%, -50%)` }}
        className={classes.paper}
      >
        {children}
      </div>
    </Modal>
  );
};

export const ModalView = withStyles(styles)(Wrapper);
