//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from "react";
// import { View } from './View';
import { EventMarker } from "../../EventMarker";
import Spiderfy from "../Spiderfy/Spiderfy.js";
// import { View } from "./../View";
import { Modal } from "../../Modal";
import { EventDetails } from "../../EventDetails";
import { EventDraft } from "../../EventDraft";
import { LogInForm } from "../../LogIn/LogInForm";
import { withAuth } from "../../../containers";
import { Marker, MarkerClusterer } from "react-google-maps";

class EventsMarkersComponent extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      clickedEventID: ""
    };
  }

  setShowModal = (open, id) => {
    if(id) {
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
    const { showModal } = this.state;
    const { handleClick, ...props } = this.props;
    const colors = ["cyan", "green", "magenta"];
    const getRandomNum = n => (Math.random() * n) >> 0;
    const randomMarkerColor = colors[getRandomNum(colors.length)];

    let renderList =
      this.props.eventsList && this.props.eventsList.length
        ? "eventsList"
        : this.props.userEventsList && this.props.userEventsList.length
          ? "userEventsList" //switch to userEventsList later
          : this.props.userHistory && this.props.userHistory.length
            ? "userHistory"
            : null;

    const renderLogin = this.props.user ? (
      <EventDraft handleClose={() => this.setShowModal(false)} />
    ) : (
      <LogInForm handleClose={() => this.setShowModal(false)} />
    );

    const renderView = this.props.isUserMarker ? (
      renderLogin
    ) : (
      <EventDetails
        handleClose={() => this.setShowModal(false)}
        {...this.props}
      />
    );

    let renderEvents = renderList
      ? this.props[renderList].map(e => {
          // console.log("Even Markers Map", e);
          // let position = { lat: +e.latitude, lng: +e.longitude };
          return (
            <F>
              <Marker
                key={"event" + e.id}
                id={e.id.toString()}
                ref={e.id.toString()}
                // label={e.id.toString()}
                position={{ lat: +e.latitude, lng: +e.longitude }}
                onDblClick={() => this.setShowModal(true)}
                icon={{
                  url: require(`../../../../assets/marker_${randomMarkerColor}_pin.png`), //'/img/icon.svg',
                  scaledSize: new window.google.maps.Size(64, 64),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(32, 64)
                }}
                animation={window.google.maps.Animation.DROP}
              />
            </F>
          );
        })
      : "";

    let renderModal = renderList ? (
      <Modal
        showModal={this.state.showModal}
        handleClose={() => this.setShowModal(false)}
      >
        {this.props.isUserMarker
          ? renderLogin
          : this.props[renderList].map(e => {
              if (e.id == this.state.clickedEventID) {
                return (
                  <EventDetails
                    handleClose={() => this.setShowModal(false)}
                    event={e}
                    {...this.props}
                    key={e.id}
                  />
                );
              }
            })}
      </Modal>
    ) : (
      ""
    );

    return (
      <F>
        <Spiderfy onSpiderfyClick={this.setShowModal}>
          {renderEvents}
        </Spiderfy>
        {renderModal}
      </F>
    );
  }
}
export const EventsMarkers = withAuth(EventsMarkersComponent);
