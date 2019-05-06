import React from "react";
import { EventsMap } from "..";
import {
  withAreaSizes,
  withFamilyEvents,
  withPartyEvents,
  withSportsEvents,
  withUserCoords
} from "../../containers";
import LoadingSpinner from "./LoadingSpinner";

const prepend = "https://maps.googleapis.com/maps/api/js?key=";
const apiKey = "AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg"
const append = "&v=3.exp&libraries=geometry,drawing,places";

const EventWrapper = props => {
  // let loaded = false
  let style = { height: props.mainHeight };
  const mapURL = prepend + apiKey + append;
  // if (props.loaded && props.eventCoords.length !== 0) {
  if (props.loaded) {
    return (
      <>
        {!props.userCoords.latitude && (
          <LoadingSpinner
            {...props}
            style={{ ...style, paddingTop: (props.mainHeight / 2) >> 0 }}
          />
        )}
        {props.userCoords.latitude && (
          <EventsMap
            isMarkerShown
            googleMapURL={mapURL}
            containerElement={<div style={style} />}
            mapElement={<div style={style} />}
            loadingElement={
              <div
                style={{ ...style, paddingTop: (props.mainHeight / 2) >> 0 }}
              />
            }
            {...props}
          />
        )}
      </>
    );
  } else {
    return null;
  }
};

const EventsWrapper = withAreaSizes(withUserCoords(EventWrapper));
export const FamilyEvents = withFamilyEvents(EventsWrapper);
export const PartyEvents = withPartyEvents(EventsWrapper);
export const SportsEvents = withSportsEvents(EventsWrapper);

// loadingElement={
//   <div style={{ ...style, paddingTop: (props.mainHeight / 2) >> 0 }}>
//     Loading...
//   </div>
// }
