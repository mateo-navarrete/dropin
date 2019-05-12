//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from "react";
import { View } from "./View";
import { Modal } from "../Modal";
import { EventDetails } from "../EventDetails";
import { EventDraft } from "../EventDraft";
import { LogInForm } from "../LogIn/LogInForm";
import { withAuth } from "../../containers";
import { Marker } from "react-google-maps";

class WrappedComponent extends Component {
  state = {
    showModal: false
  };
  setShowModal = open => {
    this.setState({ showModal: open });
    console.log("Show modal triggered")
  };

  render() {
    const { showModal } = this.state;
    const { handleClick, ...props } = this.props;
    const colors = ["cyan", "green", "magenta"];
    const getRandomNum = n => (Math.random() * n) >> 0;
    const randomMarkerColor = colors[getRandomNum(colors.length)];

    const renderLogin = props.user ? (
      <EventDraft handleClose={() => this.setShowModal(false)} />
    ) : (
      <LogInForm handleClose={() => this.setShowModal(false)} />
    );
    const renderView = props.isUserMarker ? (
      renderLogin
    ) : (
      <EventDetails handleClose={() => this.setShowModal(false)} {...props} />
    );
    return (
      <F>
        <Marker
          position={{
            lat: this.props.position.lat,
            lng: this.props.position.lng
          }}
          onClick={() => this.setShowModal(true)}
          icon={{
            url: require(`../../../assets/marker_${randomMarkerColor}_pin.png`), //'/img/icon.svg',
            scaledSize: new window.google.maps.Size(64, 64),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(32, 64)
          }}
        />
        <Modal
          showModal={showModal}
          handleClose={() => this.setShowModal(false)}
        >
          {renderView}
        </Modal>
      </F>
    );
  }
}

export const EventMarker = withAuth(WrappedComponent);
// <View {...props} handleClick={() => this.setShowModal(true)} />
