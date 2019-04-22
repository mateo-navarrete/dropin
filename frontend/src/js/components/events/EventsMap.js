import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "../../utils";
import { EventMarker, EventMarkers } from "..";
// import Spiderfy from "./Spiderfy";
import { css } from "@emotion/core";
// First way to import
import { CircleLoader } from "react-spinners";
import LoadingSpinner from "./LoadingSpinner";

const EventMap = props => {
  const {
    isMarkerShown,
    userCoords: { latitude, longitude },
    category,
    eventCoords,
    loaded,
    loading
  } = props;

  const override = css`
    display: block;
    margin: auto;
    border-color: red;
  `;
  return (
    <>
      {latitude && (
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: latitude, lng: longitude }}
        >
          {isMarkerShown && (
            <EventMarker
              latitude={latitude}
              longitude={longitude}
              loaded={loaded}
              loading={loading}
            />
          )}
          {(eventCoords.length && (
            <EventMarkers
              category={category}
              eventCoords={eventCoords}
              loaded={loaded}
              loading={loading}
            />
          )) ||
            null}
        </GoogleMap>
      )}
    </>
  );
};

export const EventsMap = withScriptjs(withGoogleMap(EventMap));
