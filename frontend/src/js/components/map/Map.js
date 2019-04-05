import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { Link } from "react-router-dom";
import '../../../styles/map.css';


const Map = (props) => {
  console.log(props.coords)
  const {coords} = props
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
      <MyMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: "100%" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Map;
