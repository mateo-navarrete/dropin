import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "../../utils";
import { EventMarker, EventMarkers } from "..";
// import Spiderfy from "./Spiderfy";
import { css } from "@emotion/core";
// First way to import
import { CircleLoader } from "react-spinners";
import LoadingSpinner from "./LoadingSpinner";

const exampleMapStyles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]

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
        options={{
            styles: exampleMapStyles,
        }}
          defaultZoom={15}
          defaultCenter={{ lat: latitude, lng: longitude }}
          defaultClickableIcons={false}
          containerProps={{
          ...props,
          style: {
            height: "100%",
          },
        }}
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
