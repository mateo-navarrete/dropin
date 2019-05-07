//jscs:disable requireShorthandArrowFunctions
/*global google*/
import React, { Component, Fragment as F } from 'react';
import { View } from './View';
import { Modal } from '../../Modal';
import { EventDetails } from '../../EventDetails';
// import { Marker } from "react-google-maps";

// const colors = ["cyan", "green", "magenta"];
// const getRandomNum = n => (Math.random() * n) >> 0;

// const randomMarkerColor = colors[getRandomNum(colors.length)];

// export const EventsMarkers = props => {
class WrappedComponent extends Component {
  state = {
    showModal: false,
  };
  setShowModal = open => {
    this.setState({ showModal: open });
    console.log(open);
  };

  render() {
    const { handleClick, ...props } = this.props;
    // console.log('openEventDetailsModal', handleClick, props);
    // console.log(eventsList, userEventsList, userHistory);
    let renderList = this.props.eventsList.length
      ? 'eventsList'
      : this.props.userEventsList.length
      ? 'userEvents'
      : this.props.userHistory.length
      ? 'userHistory'
      : null;
    // console.log(renderList);
    const renderEvents = renderList
      ? this.props[renderList].map(e => {
          return (
            <F key={'event-' + e.id}>
              <View {...e} handleClick={() => this.setShowModal(true)} />

              <Modal
                showModal={this.showModal}
                handleClose={() => this.setShowModal(false)}
              >
                <EventDetails
                  handleClose={() => this.setShowModal(false)}
                  {...e}
                />
              </Modal>
            </F>
          );
        })
      : '';
    return <F>{renderEvents}</F>;
  }
}

export const EventsMarkers = WrappedComponent;
// <Marker
//   key={e.id}
//   position={{ lat: e.latitude, lng: e.longitude }}
//   onClick={() => props.handleClick(e)}
//   icon={{
//     url: require(`../../../../assets/marker_${randomMarkerColor}_pin.png`), //'/img/icon.svg',
//     scaledSize: new google.maps.Size(64, 64),
//     origin: new google.maps.Point(0, 0),
//     anchor: new google.maps.Point(32, 64)
//   }}
// />
