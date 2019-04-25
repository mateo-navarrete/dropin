import React from "react";
/*global google*/
import { Marker, MarkerClusterer } from "../../utils";
import { withOverlay } from "../../containers";
import family from "../../../svg-family.svg";
import party from "../../../svg-party.svg";
import sports from "../../../svg-sports.svg";
import Spiderfy from "./Spiderfy";
import userMarker from "../../../assets/user_marker.png";
import marker_cluster1 from "../../../assets/marker_cluster_small.png";
import marker_cluster2 from "../../../assets/marker_cluster_medium.png";
import marker_cluster3 from "../../../assets/marker_cluster_large.png";


const eMarkers = {
  family: family,
  party: party,
  sports: sports
};

const eventsMarker = {
  family: "pal2/icon10.png",
  party: "pal2/icon27.png",
  sports: "pal2/icon57.png",
  user: "shapes/poi.png"
};
const markerURL = "http://maps.google.com/mapfiles/kml/";

const EventMark = props => {
  const { latitude, longitude } = props;
  const image = {
    url: userMarker,
    scaledSize: new google.maps.Size(60, 60)
  };
  return (
    <Marker
      onClick={
        //TODO
        // props.onMarkerClustererClick
        props.showBottomOverlay
      }
      position={{ lat: latitude, lng: longitude }}
      key="userCoordsMarker"
      icon={image}
      id="userCoordsMarker"
    />
  );
};

export const EventMarker = withOverlay(EventMark);

// animation={google.maps.Animation.BOUNCE}

const EventsMarkers = props => {
  const { category, eventCoords, showTopOverlay, loading, loaded } = props;
  // const eventMarker =
  // markerURL + (eventsMarker[category.name] || "pushpin/red-pushpin.png");
  const eventMarker = eMarkers[category.name];
  if (eventCoords.length) {
    return (
      <MarkerClusterer
        enableRetinaIcons
        minimumClusterSize={3}
        zoomOnClick
        maxZoom={16}
        averageCenter={true}
        gridSize={50}
        styles={[
          {
            url: marker_cluster1,
            width: 0,
            height: 0,
            textColor: "#00000",
            anchorText: [25, 18],
            textSize: 25
          },
          {
            url: marker_cluster2,
            width: 0,
            height: 0,
            textColor: "#00000",
            anchorText: [25, 12],
            textSize: 25
          },
          {
            url: marker_cluster3,
            width: 0,
            height: 0,
            textColor: "#00000",
            anchorText: [25, 12],
            textSize: 25
          },
          {
            url: "/static/images/cluster/m4.png",
            height: 53,
            width: 53
          },
          {
            url: "/static/images/cluster/m5.png",
            height: 53,
            width: 53
          }
        ]}
      >
        {eventCoords.length && (
          <Spiderfy>
            {eventCoords.map(coord => {
              const { id, latitude, longitude } = coord;
              return (
                <Marker
                  onDblClick={() => showTopOverlay(id)}
                  position={{ lat: latitude, lng: longitude }}
                  key={id}
                  icon={eventMarker}
                  id={id}
                  label={id.toString()}
                  animation={google.maps.Animation.DROP}
                  zIndex={100}
                />
              );
            })}
          </Spiderfy>
        )}
      </MarkerClusterer>
    );
  }
  // else {
  //   return null;
  // }
};

export const EventMarkers = withOverlay(EventsMarkers);
