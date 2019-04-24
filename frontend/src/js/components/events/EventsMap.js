import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "../../utils";
import { EventMarker, EventMarkers } from "..";
// import Spiderfy from "./Spiderfy";
import { css } from "@emotion/core";
// First way to import
import { CircleLoader } from "react-spinners";
import LoadingSpinner from "./LoadingSpinner";

const exampleMapStyles = [
  {
    featureType: "water",
    stylers: [
      {
        color: "#2980b9"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff"
      },
      {
        weight: 6
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fb364a"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#efe9e4"
      },
      {
        lightness: -40
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#efe9e4"
      },
      {
        lightness: -20
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        lightness: 100
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        lightness: -100
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.icon"
  },
  {
    featureType: "landscape",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "landscape",
    stylers: [
      {
        lightness: 20
      },
      {
        color: "#efe9e4"
      }
    ]
  },
  {
    featureType: "landscape.man_made",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        lightness: 100
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        lightness: -100
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        hue: "#11ff00"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.stroke",
    stylers: [
      {
        lightness: 100
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.icon",
    stylers: [
      {
        hue: "#4cff00"
      },
      {
        saturation: 58
      },
      {visibility: "off"}
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#f0e4d3"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#efe9e4"
      },
      {
        lightness: -25
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#efe9e4"
      },
      {
        lightness: -10
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  }
];

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
            mapTypeControl: false
          }}
          defaultZoom={15}
          defaultOptions={{mapTypeControl: false}}
          defaultCenter={{ lat: latitude, lng: longitude }}
          defaultClickableIcons={false}
          containerProps={{
            ...props,
            style: {
              height: "100%"
            }
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
