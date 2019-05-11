//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
// import { View } from './View';
import { EventMarker } from '../../EventMarker';
import Spiderfy from '../Spiderfy/Spiderfy.js'

export const EventsMarkers = props => {
  let renderList =
    props.eventsList && props.eventsList.length
      ? 'eventsList'
      : props.userEventsList && props.userEventsList.length
      ? 'userEventsList' //switch to userEventsList later
      : props.userHistory && props.userHistory.length
      ? 'userHistory'
      : null;
  // console.log(renderList, props);
  console.log("Even Markers Render List", renderList )
  const renderEvents = renderList
    ? props[renderList].map(e => {
      console.log("Even Markers Map", e )
        let position = { lat: e.latitude, lng: e.longitude };
        return (
        <EventMarker key={'event-' + e.id} {...e} position={position} />
)
      })
    : '';
  return (
    <F>
    {renderEvents ? (
      <Spiderfy>
      {renderEvents}
      </Spiderfy>
    ) : ("")}
    </F>
);
};
