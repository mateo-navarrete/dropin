//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from './Button';
import { View } from './View';
import { Modal } from '../Modal';

class WrappedComponent extends Component {
  state = {
    ageVerified: false,
    showModal: false,
  };
  setShowModal = open => {
    let path = open ? `new` : '/';
    this.props.history.push(path);
    this.setState({ showModal: open });
  };

  hideAgeVerification = () => {
    this.setState({ ageVerified: true });
  };

  render() {
    const { ageVerified, showModal } = this.state;
    const { variant } = this.props;
    const handleClose = () => {
      this.setShowModal(false);
      if (this.props.handleClose) {
        this.props.handleClose();
      }
    };

    return (
      <F>
        <Button handleClick={() => this.setShowModal(true)} variant={variant} />
        <Modal showModal={showModal} handleClose={handleClose}>
          <View
            handleClose={handleClose}
            hideAgeVerification={this.hideAgeVerification}
            ageVerified={ageVerified}
          />
        </Modal>
      </F>
    );
  }
}

export const SignUp = withRouter(WrappedComponent);
