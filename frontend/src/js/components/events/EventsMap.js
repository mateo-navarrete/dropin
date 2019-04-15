import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "../../utils";
import { EventMarker, EventMarkers } from "..";

const EventMap = props => {
  const {
    isMarkerShown,
    userCoords: { latitude, longitude },
    category,
    eventCoords
  } = props;
  return (
    <>
      {latitude && (
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: latitude, lng: longitude }}
        >
          {isMarkerShown && (
            <EventMarker latitude={latitude} longitude={longitude} />
          )}
          {eventCoords && eventCoords.length && (
            <EventMarkers category={category} eventCoords={eventCoords} />
          )}
        </GoogleMap>
      )}
    </>
  );
};

export const EventsMap = withScriptjs(withGoogleMap(EventMap));
