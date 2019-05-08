//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { View } from './View';
import { withUser } from '../../containers';
// import { Modal } from '../Modal';

class WrappedComponent extends Component {
  // state = {
  //   showModal: false,
  // };
  // setShowModal = open => {
  //   this.setState({ showModal: open });
  //   console.log(open);
  // };

  render() {
    // const { showModal } = this.state;
    // const { handleClick, ...props } = this.props;
    // console.log(this.props);
    return (
      <F>
        <View {...this.props} />
      </F>
    );
  }
}

export const EventDetails = withUser(WrappedComponent);
