//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { AuthOptionsView } from './AuthOptionsView';
import { IconButton, LoggedOutIcon,
   // Drawer
  } from '../material';
import { withStyles } from '../../containers';
import Modal from '@material-ui/core/Modal';

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

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

class Wrapper extends Component {
  state = {
    modal: false,
  };
  toggleDrawer = open => {
    this.setState({ modal: open });
  };

  render() {
    const { modal } = this.state;
    return (
      <F>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={() => this.toggleDrawer(!modal)}
        >
          <LoggedOutIcon fontSize="large" />
        </IconButton>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modal}
          onClose={() => this.toggleDrawer(!modal)}
        >
          <div style={getModalStyle()} className={this.props.classes.paper}>
            <AuthOptionsView />
          </div>
        </Modal>
      </F>
    );
  }
}
// <Drawer
//   anchor="right"
//   open={modal}
//   onClose={() => this.toggleDrawer(false)}
// >
//   <SideList />
// </Drawer>

export const CompactLoggedOutView = withStyles(styles)(Wrapper);
