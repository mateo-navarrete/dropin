//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { Drawer } from '../Drawer';
import { View } from './View';
import { MenuIcon } from '../material';
import { ShowMenuButton } from '../utils';

export class EventsMenu extends Component {
  state = {
    showModal: false,
  };
  setShowModal = showModal => {
    this.setState({ showModal: showModal });
  };

  render() {
    const { showModal } = this.state;
    return (
      <F>
      <ShowMenuButton
        buttonIcon={<MenuIcon fontSize='large'/>}
        handleClick={() => this.setShowModal(true)}
      />
        <Drawer
          anchor="left"
          showModal={showModal}
          handleClose={() => this.setShowModal(false)}
        >
          <View handleClose={() => this.setShowModal(false)} />
        </Drawer>
      </F>
    );
  }
}
