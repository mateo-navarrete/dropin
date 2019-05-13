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
import { Marker } from "react-google-maps";

class EventsMarkersComponent extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  setShowModal = open => {
    this.setState({ showModal: open });
    console.log("Show modal triggered");
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
    // console.log(renderList, this.props);
    // console.log("Event Markers Render List", renderList);

    const renderLogin = this.props.user ? (
      <EventDraft handleClose={() => this.setShowModal(false)} />
    ) : (
      <LogInForm handleClose={() => this.setShowModal(false)} />
    );

    const renderView = this.props.isUserMarker ? (
      renderLogin
    ) : (
      <EventDetails handleClose={() => this.setShowModal(false)} {...this.props} />
    );


    let renderEvents = renderList
      ? this.props[renderList].map(e => {
          // console.log("Even Markers Map", e);
          // let position = { lat: +e.latitude, lng: +e.longitude };
          return (
            <F>
              <Marker
                key={"event" + e.id}
                position={
                  { lat: +e.latitude, lng: +e.longitude }
                }
                onDblClick={() => this.setShowModal(true)}
                icon={{
                  url: require(`../../../../assets/marker_${randomMarkerColor}_pin.png`), //'/img/icon.svg',
                  scaledSize: new window.google.maps.Size(64, 64),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(32, 64)
                }}
                animation={window.google.maps.Animation.DROP}
              />
              <Modal
              key={"modal" + e.id}
                showModal={showModal}
                handleClose={() => this.setShowModal(false)}
              >
                {this.props.isUserMarker ? (
                  renderLogin
                ) : (
                  <EventDetails handleClose={() => this.setShowModal(false)} event={e} {...this.props} />
                )}
              </Modal>
              </F>
          );
        })
      : "";

    return (
      <F>
      <Spiderfy>
      {renderEvents}
      </Spiderfy>
      </F>
    )
  }
}
export const EventsMarkers = withAuth(EventsMarkersComponent);
