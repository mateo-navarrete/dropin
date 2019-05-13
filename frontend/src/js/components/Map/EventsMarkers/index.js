//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from "react";
// import { View } from './View';
import { EventMarker } from "../../EventMarker";
import Spiderfy from "../Spiderfy/Spiderfy.js";

export const EventsMarkers = props => {
  let renderList = props[props.markerType] || null;
  const renderEvents = renderList
    ? renderList.map(e => {
        let position = { lat: e.latitude, lng: e.longitude };
        return (
          <EventMarker key={"event-" + e.id} {...e} position={position} />
        )
      })
    : "";
    console.log("render Events", renderEvents)
  return (
    <div>
    <Spiderfy>
    {renderEvents}
    </Spiderfy>
    </div>
  )
};
