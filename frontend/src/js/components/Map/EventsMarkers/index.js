//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
// import { View } from './View';
import { EventMarker } from '../../EventMarker';

export const EventsMarkers = props => {
  let renderList = props.eventsList.length
    ? 'eventsList'
    : props.userEventsList.length
    ? 'userEventsList'
    : props.userHistory.length
    ? 'userHistory'
    : null;
  // console.log(renderList, props);
  const renderEvents = renderList
    ? props[renderList].map(e => {
        let position = { lat: e.latitude, lng: e.longitude };
        return <EventMarker key={'event-' + e.id} {...e} position={position} />;
      })
    : '';
  return <F>{renderEvents}</F>;
};