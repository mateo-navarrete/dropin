import React from 'react';
import { Marker, MarkerClusterer } from '../../utils';
import { withOverlay } from '../../containers';
import family from '../../../svg-family.svg';
import party from '../../../svg-party.svg';
import sports from '../../../svg-sports.svg';

const eMarkers = {
  family: family,
  party: party,
  sports: sports,
};

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
      onClick={
        //TODO
        props.onMarkerClustererClick
      }
      position={{ lat: latitude, lng: longitude }}
      key="userCoordsMarker"
      icon={markerURL + eventsMarker.user}
      id="userCoordsMarker"
    />
  );
};

const EventsMarkers = props => {
  const { category, eventCoords, showTopOverlay } = props;
  // const eventMarker =
  // markerURL + (eventsMarker[category.name] || 'pushpin/red-pushpin.png');
  const eventMarker = eMarkers[category.name];
  // console.log(category, eventMarker);
  return (
    <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
      {eventCoords.map(coord => {
        const { id, latitude, longitude } = coord;
        return (
          <Marker
            onClick={() => showTopOverlay(id)}
            position={{ lat: latitude, lng: longitude }}
            key={id}
            icon={eventMarker}
            id={id}
          />
        );
      })}
    </MarkerClusterer>
  );
};

export const EventMarkers = withOverlay(EventsMarkers);
