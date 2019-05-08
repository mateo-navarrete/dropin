//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { View } from './View';
import { Wrapper } from './Wrapper';
import { Logo } from '../Logo';
import { Modal } from '../../Modal';
import { EventDraft } from '../../EventDraft';

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
          <EventDraft handleClose={() => this.setShowModal(false)} />
        </Modal>
      </F>
    );
  }
}

export const FooterLogo = WrappedComponent;
