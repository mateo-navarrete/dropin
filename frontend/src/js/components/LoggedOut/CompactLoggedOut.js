//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { LoggedOutMenu } from './LoggedOutMenu';
import { ShowLoggedOutMenuButton } from './ShowLoggedOutMenuButton';
import { Modal } from '../Modal';

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
        <ShowLoggedOutMenuButton handleClick={() => this.toggleModal(true)} />
        <Modal modal={modal} handleClick={() => this.toggleModal(false)}>
          <LoggedOutMenu
            closeLoggedOutMenu={() => this.toggleModal(false)}
            {...this.props}
          />
        </Modal>
      </F>
    );
  }
}

export const CompactLoggedOut = WrappedComponent;
