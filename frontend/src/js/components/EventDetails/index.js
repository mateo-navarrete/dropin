//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { View } from './View';
import { withUser, withEvents } from '../../containers';
// import { Modal } from '../Modal';

class WrappedComponent extends Component {
  // state = {
  //   showModal: false,
  // };
  // setShowModal = open => {
  //   this.setState({ showModal: open });
  //   console.log(open);
  // };
  // componentDidMount() {
  //   console.log("Event details index props", this.props)
  //   const {position, getAddress} = this.props
  //   let userCoords = {
  //     latitude: position.lat,
  //     longitude: position.lng
  //   }
  //   this.props.getAddress(userCoords)
  // }

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

export const EventDetails = withEvents(withUser(WrappedComponent));
