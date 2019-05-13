//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
// import { View } from './View';
import { EventMarker } from '../../EventMarker';

export const EventsMarkers = props => {
  let renderList = props[props.markerType] || null;
  const renderEvents = renderList
    ? renderList.map(e => {
        let position = { lat: e.latitude, lng: e.longitude };
        return <EventMarker key={'event-' + e.id} {...e} position={position} />;
      })
    : '';
  return <F>{renderEvents}</F>;
};
