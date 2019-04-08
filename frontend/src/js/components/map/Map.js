import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { Link } from "react-router-dom";
import "../../../styles/map.css";
import { withRouter } from "react-router";
import { withUserCoords } from "../../containers";

const Map = props => {
  let path;
  const { coords } = props;
  switch (props.match.path.slice(1)) {
    case "education":
      path = "education";
      break;
    case "entertainment":
      path = "entertainment";
      break;
    case "family":
      path = "family";
      break;
    case "food":
      path = "food";
      break;
    case "gaming":
      path = "gaming";
      break;
    case "humanitarian":
      path = "humanitarian";
      break;
    case "music":
      path = "music";
      break;
    case "party":
      path = "party";
      break;
    case "religious":
      path = "religious";
      break;
    case "sports":
      path = "sports";
      break;
    default:
    path = "home"
    break;
  }

  console.log("Path!!!", path)
  console.log("Map props!!", props)

  const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 40.742935, lng: -73.941707 }}
      >
        {coords.map((coord, i) => {
          return (
            <Marker
              position={{ lat: coord.latitude, lng: coord.longitude }}
              key={coord.i}
              icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            />
          );
        })}
      </GoogleMap>
    ))
  );
  // let time = new Date(Date.now());
  // time = time.toString();

  return (
    <div className="map-container">
      <div className="map_component">
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%`, width: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
};

export default withUserCoords(withRouter(Map));
