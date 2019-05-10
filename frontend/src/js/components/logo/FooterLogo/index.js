//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { View } from './View';
import { Wrapper } from './Wrapper';
import { Logo } from '../Logo';
import { Modal } from '../../Modal';
import { EventDraft } from '../../EventDraft';
import { LogInForm } from '../../LogIn/LogInForm';
import { withAuth } from '../../../containers';

class WrappedComponent extends Component {
  state = {
    showModal: false,
  };
  setShowModal = open => {
    this.setState({ showModal: open });
  };

  render() {
    const { showModal } = this.state;
    const { handleClick, ...props } = this.props;
    const renderLogin = props.user ? (
      <EventDraft handleClose={() => this.setShowModal(false)} />
    ) : (
      <LogInForm handleClose={() => this.setShowModal(false)} />
    );
    return (
      <F>
        <Wrapper {...props}>
          <View {...props} handleClick={() => this.setShowModal(true)}>
            <Logo {...props} />
          </View>
        </Wrapper>
        <Modal
          showModal={showModal}
          handleClose={() => this.setShowModal(false)}
        >
          {renderLogin}
        </Modal>
      </F>
    );
  }
}

export const FooterLogo = withAuth(WrappedComponent);
