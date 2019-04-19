import React from "react";
import { EventsMap } from "..";
import {
  withAreaSizes,
  withFamilyEvents,
  withPartyEvents,
  withSportsEvents,
  withUserCoords
} from "../../containers";

const prepend = "https://maps.googleapis.com/maps/api/js?key=";
const apiKey = "AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg";
const append = "&v=3.exp&libraries=geometry,drawing,places";

const EventWrapper = props => {
  console.log("Events Wrapper!!!!: props", props);
  console.log("Events Wrapper!!!!: Props", props.eventCoords.length);
  let style = { height: props.mainHeight };
  const mapURL = prepend + apiKey + append;
  if (props.eventCoords.length !== 0) {
    return (
      <EventsMap
        isMarkerShown
        googleMapURL={mapURL}
        loadingElement={<div style={style} />}
        containerElement={<div style={style} />}
        mapElement={<div style={style} />}
        {...props}
      />
    );
  } else {
    console.log("Events Wrapper Option 2");
    return (
      <EventsMap
        isMarkerShown
        googleMapURL={mapURL}
        loadingElement={<div style={style} />}
        containerElement={<div style={style} />}
        mapElement={<div style={style} />}
        {...props}
      />
    );
  }
};

const EventsWrapper = withAreaSizes(withUserCoords(EventWrapper));
export const FamilyEvents = withFamilyEvents(EventsWrapper);
export const PartyEvents = withPartyEvents(EventsWrapper);
export const SportsEvents = withSportsEvents(EventsWrapper);
