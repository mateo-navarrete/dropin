//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { withRouter } from 'react-router-dom';
import { SignInButton } from './SignInButton';
import { SignInView } from './SignInView';
import { Modal } from '../../Modal';

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
    const { closeAuthMenu, ...rest } = this.props;
    const closeModal = () => {
      this.toggleModal(false);
      if (closeAuthMenu) {
        closeAuthMenu();
      }
    };

    return (
      <F>
        <SignInButton
          handleClick={() => this.toggleModal(true)}
          isButtonOutlined={this.props.isButtonOutlined}
        />
        <Modal modal={modal} handleClick={closeModal}>
          <SignInView closeModal={closeModal} {...rest} />
        </Modal>
      </F>
    );
  }
}

export const SignIn = withRouter(WrappedComponent);
