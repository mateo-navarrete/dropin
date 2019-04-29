//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { LoggedInSideList, LoggedInButton } from '../utils';
import { Drawer } from '../../material';
// import { ModalView } from '../../utils';

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
        <LoggedInButton handleClick={() => this.toggleDrawer(!modal)} />
        <Drawer
          anchor="right"
          open={modal}
          onClose={() => this.toggleDrawer(false)}
        >
          <LoggedInSideList {...this.props} />
        </Drawer>
      </F>
    );
  }
}
// <ModalView modal={modal} handleClick={() => this.toggleDrawer(!modal)}>

export const LoggedInView = Wrapper;
