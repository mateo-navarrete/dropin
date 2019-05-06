//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
// import { View } from './View';
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
    console.log(this.props);
    return (
      <F>
        <div>Report || ( Edit || Delete )</div>
        <div>TitleTag | ( FavoriteStatus )</div>
        <div>User | ( FavoriteStatus )</div>
        <div>CreatedAt | durationBar</div>
        <div>( Media )</div>
        <div>Caption</div>
        <div>Tags | ( FavoriteStatus )</div>
        <div>Geolocation</div>
        <div>Address</div>
        <div>Reactions</div>
        <div>x CLOSE</div>
      </F>
    );
  }
}

export const EventDetails = WrappedComponent;
