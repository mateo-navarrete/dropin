import React from 'react';
import { Marker, MarkerClusterer } from '../../utils';

const eventsMarker = {
  family: 'pal2/icon10.png',
  party: 'pal2/icon27.png',
  sports: 'pal2/icon57.png',
  user: 'pal3/icon40.png',
};
const markerURL = 'http://maps.google.com/mapfiles/kml/';

export const EventMarker = props => {
  const { latitude, longitude } = props;
  return (
    <Marker
      position={{ lat: latitude, lng: longitude }}
      key="userCoordsMarker"
      icon={markerURL + eventsMarker.user}
      id="userCoordsMarker"
    />
  );
};

export const EventMarkers = props => {
  const { category, eventCoords } = props;
  const eventMarker =
    markerURL + (eventsMarker[category.name] || 'pushpin/red-pushpin.png');
  return (
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {eventCoords.map((coord, i) => {
        return (
          <Marker
            position={{ lat: coord.latitude, lng: coord.longitude }}
            key={i}
            icon={eventMarker}
            id={coord.id}
          />
        );
      })}
    </MarkerClusterer>
  );
};
