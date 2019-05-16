//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
// import { View } from './View';
// import { EventMarker } from '../../EventMarker';
import Spiderfy from '../Spiderfy/Spiderfy.js';
// import { View } from "./../View";
import { Modal } from '../../Modal';
import { EventDetails } from '../../EventDetails';
import { EventDraft } from '../../EventDraft';
import { LogInForm } from '../../LogIn/LogInForm';
import { withAuth } from '../../../containers';
import {
  Marker
  // MarkerClusterer
} from 'react-google-maps';
// import event_marker_red_png from "../../../../assets/event_marker_red_png.png"

class EventsMarkersComponent extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      clickedEventID: '',
    };
  }

  setShowModal = (open, id) => {
    if (id) {
      this.setState({ showModal: open, clickedEventID: id.toString() });
    } else {
      this.setState({ showModal: open });
    }
  };

  onSpiderfyClick = (open, id) => {
    // this.setState({ clickedEventID: id.toString() });
    this.setShowModal(open);
  };

  render() {
    // const { showModal } = this.state;
    const { handleClick, ...props } = this.props;
    // const colors = ['cyan', 'green', 'magenta'];
    // const getRandomNum = n => (Math.random() * n) >> 0;
    // const randomMarkerColor = colors[getRandomNum(colors.length)];

    // let renderList =
    //   this.props.eventsList && this.props.eventsList.length
    //     ? 'eventsList'
    //     : this.props.userEventsList && this.props.userEventsList.length
    //     ? 'userEventsList' //switch to userEventsList later
    //     : this.props.userHistory && this.props.userHistory.length
    //     ? 'userHistory'
    //     : null;
    let renderList = props[props.markerType] || null;

    const renderLogin = this.props.user ? (
      <EventDraft handleClose={() => this.setShowModal(false)} />
    ) : (
      <LogInForm handleClose={() => this.setShowModal(false)} />
    );

    // const renderView = this.props.isUserMarker ? (
    //   renderLogin
    // ) : (
    //   <EventDetails
    //     handleClose={() => this.setShowModal(false)}
    //     {...this.props}
    //   />
    // );

    let renderEvents = renderList
      ? renderList.map(e => {
          // console.log("Even Markers Map", e);
          // let position = { lat: +e.latitude, lng: +e.longitude };
          return (
            <F key={'event' + e.id}>
              <Marker
                id={e.id.toString()}
                ref={e.id.toString()}
                // label={e.id.toString()}
                position={{ lat: +e.latitude, lng: +e.longitude }}
                onDblClick={() => this.setShowModal(true)}
                icon={{
                  url: require('../../../../assets/event_marker_red_png.png'), //'/img/icon.svg',
                  scaledSize: new window.google.maps.Size(65, 65),
                }}
                animation={window.google.maps.Animation.DROP}
              />
            </F>
          );
        })
      : '';

    let renderModal = renderList ? (
      <Modal
        showModal={this.state.showModal}
        handleClose={() => this.setShowModal(false)}
      >
        {this.props.isUserMarker
          ? renderLogin
          : renderList.map(e => {
              if (+e.id === +this.state.clickedEventID) {
                return (
                  <EventDetails
                    handleClose={() => this.setShowModal(false)}
                    event={e}
                    {...this.props}
                    key={e.id}
                  />
                );
              } else {
                return null;
              }
            })}
      </Modal>
    ) : (
      ''
    );

    return (
      <F>
        {renderModal}
        <Spiderfy onSpiderfyClick={this.setShowModal}>{renderEvents}</Spiderfy>
      </F>
    );
  }
}
export const EventsMarkers = withAuth(EventsMarkersComponent);
