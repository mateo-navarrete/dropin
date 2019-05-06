//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
// import { View } from './View';
// import { Modal } from '../Modal';
// import { EventDetails } from '../EventDetails';

class WrappedComponent extends Component {
  // state = {
  //   showModal: false,
  // };
  // setShowModal = open => {
  //   this.setState({ showModal: open });
  // };

  render() {
    // const { showModal } = this.state;
    // const { handleClick, ...props } = this.props;
    // console.log(showModal);
    return <F>'Render Event Draft'</F>;
  }
}

// <View {...props} handleClick={() => this.setShowModal(true)} />
//
// <Modal
//   showModal={showModal}
//   handleClose={() => this.setShowModal(false)}
// >
//   <EventDetails
//     handleClose={() => this.setShowModal(false)}
//     {...props}
//   />
// </Modal>

export const EventDraft = WrappedComponent;
