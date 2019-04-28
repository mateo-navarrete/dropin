//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { IconButton, MenuIcon } from '../material';
import { withStyles } from '../../containers';
import Modal from './Modal';
import Drawer from '@material-ui/core/Drawer';

const styles = {
  menuButton: {
    // marginLeft: -12,
    // marginRight: 20,
  },
};

// const Wrapper = props => {
class Wrapper extends Component {
  state = {
    modal: false,
  };
  toggleDrawer = open => {
    this.setState({
      modal: open,
    });
    console.log(open);
  };
  // toggleDrawer = open => () => {
  //   this.setState({
  //     modal: open
  //   });
  //   console.log(open)
  // };
  render() {
    console.log(this.state);
    const { modal } = this.state;
    const renderModal = modal && (
      <Modal onClose={() => this.toggleDrawer(false)} title='Test Modal'>
        Is this working?
      </Modal>
    );
    return (
      <F>
        <IconButton
          className={this.props.classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={() => this.toggleDrawer(!modal)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        {renderModal}
      </F>
    );
  }
}

// <Drawer anchor="left" open={modal}>
//   <div
//     tabIndex={0}
//     role="button"
//     onClick={() => this.toggleDrawer(false)}
//     onKeyDown={this.toggleDrawer(false)}
//   >
//     <p>This modal is working</p>
//   </div>
// </Drawer>

export const MenuButton = withStyles(styles)(Wrapper);
