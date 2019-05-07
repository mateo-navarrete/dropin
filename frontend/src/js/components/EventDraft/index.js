//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { videoConfig } from './videoConfig';
import VideoComponent from './VideoComponent';
// import { View } from './View';
// import { Modal } from '../Modal';
// import { EventDetails } from '../EventDetails';
import { withUser } from '../../containers';

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
        <VideoComponent {...videoConfig} />
      </F>
    );
  }
}
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
