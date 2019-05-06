//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { View } from './View';
import { Modal } from '../Modal';
import { EventDetails } from '../EventDetails';
import { EventDraft } from '../EventDraft';

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
    const renderView = props.isUserMarker ? (
      <EventDraft handleClose={() => this.setShowModal(false)} {...props} />
    ) : (
      <EventDetails handleClose={() => this.setShowModal(false)} {...props} />
    );
    return (
      <F>
        <View {...props} handleClick={() => this.setShowModal(true)} />

        <Modal
          showModal={showModal}
          handleClose={() => this.setShowModal(false)}
        >
          {renderView}
        </Modal>
      </F>
    );
  }
}

export const EventMarker = WrappedComponent;
