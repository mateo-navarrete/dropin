//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpButton } from './SignUpButton';
import { ValidateAge } from './ValidateAge';
import { Modal } from '../../Modal';

class WrappedComponent extends Component {
  state = {
    is18: false,
    modal: false,
  };
  toggleModal = open => {
    let path = open ? `new` : '/';
    this.props.history.push(path);
    this.setState({ modal: open });
  };

  hideMustBe18 = () => {
    this.setState({ is18: true });
  };

  render() {
    const { is18, modal } = this.state;
    const { closeLoggedOutMenu, ...rest } = this.props;
    const closeModal = () => {
      this.toggleModal(false);
      if (closeLoggedOutMenu) {
        closeLoggedOutMenu();
      }
    };

    return (
      <F>
        <SignUpButton
          handleClick={() => this.toggleModal(true)}
          isButtonOutlined={this.props.isButtonOutlined}
        />

        <Modal modal={modal} handleClick={closeModal}>
          <ValidateAge
            is18={is18}
            closeModal={closeModal}
            hideMustBe18={this.hideMustBe18}
            {...rest}
          />
        </Modal>
      </F>
    );
  }
}

export const SignUp = withRouter(WrappedComponent);
