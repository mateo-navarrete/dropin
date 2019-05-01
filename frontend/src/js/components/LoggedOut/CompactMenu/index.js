//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { Button } from './Button';
import { View } from './View';
import { Modal } from '../../Modal';

class WrappedComponent extends Component {
  state = {
    modal: false,
  };
  toggleModal = open => {
    this.setState({ modal: open });
  };

  render() {
    const { modal } = this.state;
    return (
      <F>
        <Button handleClick={() => this.toggleModal(true)} />
        <Modal modal={modal} handleClose={() => this.toggleModal(false)}>
          <View handleClose={() => this.toggleModal(false)} />
        </Modal>
      </F>
    );
  }
}

export const CompactMenu = WrappedComponent;
