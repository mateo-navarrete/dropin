//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from "react";
// import { View } from './View';
import { EventMarker } from "../../EventMarker";
import Spiderfy from "../Spiderfy/Spiderfy.js";
// import { View } from "./../View";
import { Modal } from "../../Modal";
import { EventDetails } from "../../EventDetails";
import { EventDraft } from "../../EventDraft";
import { LogInForm } from "../../LogIn/LogInForm";
import { withAuth } from "../../../containers";
import { Marker } from "react-google-maps";


export const EventsMarkers = props => {
  let renderList =
    props.eventsList && props.eventsList.length
      ? "eventsList"
      : props.userEventsList && props.userEventsList.length
        ? "userEventsList" //switch to userEventsList later
        : props.userHistory && props.userHistory.length
          ? "userHistory"
          : null;
  // console.log(renderList, props);
  console.log("Event Markers Render List", renderList);
  let renderEvents = renderList
    ? props[renderList].map(e => {
        console.log("Even Markers Map", e);
        let position = { lat: e.latitude, lng: e.longitude };
        return (
          <EventMarker key={"event-" + e.id} {...e} position={position} />
        )
      })
    : "";
    console.log("render Events", renderEvents)
  return (
    <div>
    {renderEvents}
    </div>
  )
};
