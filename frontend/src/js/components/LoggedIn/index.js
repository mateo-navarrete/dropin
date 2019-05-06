//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { View } from './View';
import { Drawer } from '../Drawer';
import { PersonIcon } from '../material';
import { ShowMenuButton } from '../utils';

class WrappedComponent extends Component {
  state = {
    showModal: false,
  };
  setShowModal = open => {
    this.setState({ showModal: open });
  };

  render() {
    const { showModal } = this.state;
    return (
      <F>
      <ShowMenuButton
        buttonIcon={<PersonIcon fontSize='large'/>}
        handleClick={() => this.setShowModal(true)}
      />
        <Drawer
          anchor="right"
          showModal={showModal}
          handleClose={() => this.setShowModal(false)}
        >
          <View handleClose={() => this.setShowModal(false)} />
        </Drawer>
      </F>
    );
  }
}

export const LoggedIn = WrappedComponent;
