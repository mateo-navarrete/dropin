//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpButton } from './SignUpButton';
import { SignUpView } from './SignUpView';
import { Modal } from '../../Modal';

class Wrapper extends Component {
  state = {
    modal: false,
  };
  toggleModal = open => {
    let path = open ? `new` : '/';
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
        <SignUpButton
          handleClick={() => this.toggleModal(true)}
          isButtonOutlined={this.props.isButtonOutlined}
        />
        <Modal modal={modal} handleClick={closeModal}>
          <SignUpView closeModal={closeModal} {...rest} />
        </Modal>
      </F>
    );
  }
}

export const SignUp = withRouter(Wrapper);
