//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { View } from './View';
import { Modal } from '../../Modal';
import { InputIcon } from '../../material';
import { ShowMenuButton } from '../../utils';

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
          buttonIcon={<InputIcon fontSize='large'/>}
          handleClick={() => this.setShowModal(true)}
        />
        <Modal
          showModal={showModal}
          handleClose={() => this.setShowModal(false)}
        >
          <View handleClose={() => this.setShowModal(false)} />
        </Modal>
      </F>
    );
  }
}

export const CompactMenu = WrappedComponent;
