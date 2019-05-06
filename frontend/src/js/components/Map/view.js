//jscs:disable requireShorthandArrowFunctions
/*global google*/
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { CenterMarker } from './CenterMarker';
import { EventsMarkers } from './EventsMarkers';
import { UserMarker } from './UserMarker';

const WrappedComponent = props => {
  return (
    <GoogleMap
      defaultZoom={15}
      center={props.userCoords}
      defaultOptions={{
        clickableIcons: false,
        disableDefaultUI: true,
        //styles: MapStyles.night, //randomMap,
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
        handleClick={props.onMarkerClick}
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
