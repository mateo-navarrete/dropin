import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "../../utils";
import { EventMarker, EventMarkers } from "..";
import Spiderfy from "./Spiderfy";

const EventMap = props => {
  const {
    isMarkerShown,
    userCoords: { latitude, longitude },
    category,
    eventCoords,
    loaded,
    loading
  } = props;
  return (
    <>
      {latitude && (
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: latitude, lng: longitude }}
        >
          {eventCoords.length && (
            <EventMarkers
              category={category}
              eventCoords={eventCoords}
              loaded={loaded}
              loading={loading}
            />
          )}
        </GoogleMap>
      )}
    </>
  );
};

export const EventsMap = withScriptjs(withGoogleMap(EventMap));

// {isMarkerShown && (
//   <EventMarker
//     latitude={latitude}
//     longitude={longitude}
//     loaded={loaded}
//     loading={loading}
//   />
// )}
