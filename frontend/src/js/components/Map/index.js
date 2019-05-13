import React, { Component, Fragment as F } from "react";
import { View } from "./view";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import {
  withDimensions,
  withGeolocation,
  withEvents,
  withUser
} from "../../containers";
const prepend = "https://maps.googleapis.com/maps/api/js?key=";
const apiKey = "AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg"; //process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const append = "&v=3.exp&libraries=geometry,drawing,places";
const mapURL = prepend + apiKey + append;

const LoadingElement = <div style={{ height: `100%` }} />;
const MapElement = <div style={{ height: `100%` }} />;

class WrappedComponent extends Component {
  state = {
    isMarkerShown: true
    // recenter: false,
  };

  // resetCenter = () => {
  //   this.timeout2 = setTimeout(() => {
  //     this.setState({ recenter: false });
  //   }, 100);
  // };

  handleUserMarkerClick = () => {
    // this.setState({ isMarkerShown: false });
    console.log("REDUX props.eventDraft()");
  };

  handleEventsMarkersClick = el => {
    // this.setState({ isMarkerShown: true });
    console.log("REDUX props.eventDetails()", el);
  };

  handleCenterClick = e => {
    this.props.getGeolocation();

    //this.setState({ recenter: true });
    // console.log(this.props);
    //TODO => this.props.getGeolocation()
    // this.resetCenter();
  };

  render() {
    const {
      coords: { latitude, longitude }
    } = this.props;
    const ContainerElement = (
      <div
        style={{
          height: this.props.mainHeight + this.props.footerHeight + 21,
          overflow: "hidden"
        }}
      />
    );
    let gotUserCoords = latitude ? true : false;
    let userCoords = { lat: latitude, lng: longitude };

    // recenter={this.state.recenter}
    return (
      <F>
        {gotUserCoords ? (
          <View
            gotUserCoords={gotUserCoords}
            userCoords={userCoords}
            center={userCoords}
            isMarkerShown={this.state.isMarkerShown}
            onUserMarkerClick={this.handleUserMarkerClick}
            onEventsMarkersClick={this.handleEventsMarkersClick}
            onCenterClick={this.handleCenterClick}
            googleMapURL={mapURL}
            loadingElement={LoadingElement}
            containerElement={ContainerElement}
            mapElement={MapElement}
            eventsList={this.props.eventsList}
            userEventsList={this.props.userEventsList}
            userHistory={this.props.userHistory}
            markerType={this.props.markerType}
            {...this.props}
          />
        ) : (
          <LoadingSpinner />
        )}
      </F>
    );
  }
}

export const Map = withEvents(
  withUser(withDimensions(withGeolocation(WrappedComponent)))
);
