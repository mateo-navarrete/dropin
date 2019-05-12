//jscs:disable requireShorthandArrowFunctions
/*global google*/
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { CenterMarker } from './CenterMarker';
import { EventsMarkers } from './EventsMarkers';
import { UserMarker } from './UserMarker';
// import { MapStyles } from '../Main/MyStyles';

const WrappedComponent = props => {
  console.log("Map View Props", props)
  let centerCoords = {lat: +props.userCoords.lat, lng: +props.userCoords.lng}
  return (
    <GoogleMap
      center={centerCoords}
      defaultZoom={15}
      defaultOptions={{
        // center: props.center,
        clickableIcons: false,
        disableDefaultUI: true,
        // styles: MapStyles.night, //randomMap,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT,
        },
      }}
    >
      <CenterMarker onCenterClick={props.onCenterClick} />

      <UserMarker
        isMarkerShown={props.isMarkerShown}
        position={props.userCoords}
        handleClick={props.onUserMarkerClick}
      />

      <EventsMarkers
        eventsList={props.eventsList}
        userEventsList={props.userEventsList}
        userHistory={props.userHistory}
      />
    </GoogleMap>
  );
};

export const View = withScriptjs(withGoogleMap(WrappedComponent));
