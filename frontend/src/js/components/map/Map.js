import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { Link } from "react-router-dom";
import '../../../styles/map.css';


const Map = () => {
  const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
      >
        <Marker position={{ lat: 40.73061, lng: -73.935242 }} key={1} />
      </GoogleMap>
    ))
  );
  let time = new Date(Date.now());
  time = time.toString();

  return (
    <div className="map-container">
      <MyMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: "100%" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <p>{time}</p>
    </div>
  );
};

export default Map;
