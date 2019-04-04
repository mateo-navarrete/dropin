import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import {Link} from "react-router-dom"

const Map = () => {
  const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={7}
        defaultCenter={{ lat: 40.730610, lng: -73.935242 }}
      >
        ///// Map for multiple markers //////
        // {markers.map(marker => {
        //   return (
            <Marker
              position={{ lat: 40.730610, lng: -73.935242 }}
              key=1
              clickable="true"
            />
        //   );
        // })}
      </GoogleMap>
    ))
  );

  // let time = new Date(Date.now());
  // time = time.toString();

  return (
    <div className="map-container">
    <MyMapComponent
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `300px` }} />}
      containerElement={<div style={{ height: `300px`, width: '300px' }} />}
      mapElement={<div style={{ height: `300px` }} />}
    />
    </div>
  );
};

export default Map;
