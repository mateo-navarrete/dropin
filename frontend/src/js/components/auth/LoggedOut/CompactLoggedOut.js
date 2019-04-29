//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { AuthMenu } from './AuthMenu';
import { ShowAuthMenuButton } from './ShowAuthMenuButton';
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
        <ShowAuthMenuButton handleClick={() => this.toggleModal(true)} />
        <Modal modal={modal} handleClick={() => this.toggleModal(false)}>
          <AuthMenu
            closeAuthMenu={() => this.toggleModal(false)}
            {...this.props}
          />
        </Modal>
      </F>
    );
  }
}

export const CompactLoggedOut = WrappedComponent;
