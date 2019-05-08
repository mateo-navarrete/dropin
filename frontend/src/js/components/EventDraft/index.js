//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
// import { videoConfig } from './videoConfig';
// import VideoComponent from './VideoComponent';
// import { View } from './View';
// import { Modal } from '../Modal';
// import { EventDetails } from '../EventDetails';
import { withUser } from '../../containers';


// NOTE: to work on Video Component
// rename /EventDraft folder /xEventDraft
// && name this folder /EventDraft

class WrappedComponent extends Component {
  // state = {
  //   showModal: false,
  // };
  // setShowModal = open => {
  //   this.setState({ showModal: open });
  // };

  render() {
    console.log(this.props);
    // const { showModal } = this.state;
    // const { handleClick, ...props } = this.props;
    // console.log(showModal);
    return (
      <F>
        <div>'Render Event Draft'</div>
      </F>
    );
  }
}
// <VideoComponent {...videoConfig} />
// <VideoComponent {...videoConfig} />

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

export const EventDraft = withUser(WrappedComponent);
