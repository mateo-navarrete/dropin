//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from './Button';
import { View } from './View';
import { Modal } from '../Modal';

class WrappedComponent extends Component {
  state = {
    modal: false,
  };
  toggleModal = open => {
    let path = open ? `login` : '/';
    this.props.history.push(path);
    this.setState({ modal: open });
  };

  render() {
    const { modal } = this.state;
    const { closeLoggedOutMenu, variant } = this.props;
    const closeModal = () => {
      this.toggleModal(false);
      if (closeLoggedOutMenu) {
        closeLoggedOutMenu();
      }
    };

    return (
      <F>
        <Button
          handleClick={() => this.toggleModal(true)}
          variant={variant}
        />
        <Modal modal={modal} handleClick={closeModal}>
          <View closeModal={closeModal} />
        </Modal>
      </F>
    );
  }
}

export const LogIn = withRouter(WrappedComponent);
