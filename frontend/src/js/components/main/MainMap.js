import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
  InfoWindow
} from 'react-google-maps';
import { Link } from 'react-router-dom';
import '../../../styles/map.css';
import { withRouter } from 'react-router';
import { withUserCoords, withPinModal, withScreenSize } from '../../containers';
import family_marker from '../../../assets/family_marker.png';
const {
  MarkerClusterer,
} = require('react-google-maps/lib/components/addons/MarkerClusterer');
const defaultMapOptions = {
  fullscreenControl: false,
};
const getPath = (path, lat, long) => {
  // let path;
  // let userLat = userCoords.latitude;
  // let userLong = userCoords.longitude;
  switch (path) {
    case '/family':
      return 'http://maps.google.com/mapfiles/kml/pal2/icon10.png';
    case '/party':
      return 'http://maps.google.com/mapfiles/kml/pal2/icon27.png';
    case '/sports':
      return 'http://maps.google.com/mapfiles/kml/pal2/icon57.png';
    default:
      return 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png';
  }
};

const MainMaps = ({ coords, userCoords, mainHeight, width, ...props }) => {
  // console.log('@@', props);
  // props.match.path
  let userLat = userCoords.latitude;
  let userLong = userCoords.longitude;
  let path = getPath(props.match.path, userLat, userLong);
  const openPinModal = props.openPinModal;
  // const handleClick = event => {
  //   console.log("handle click triggered");
  //   console.log("event!!", event);
  //   window.alert("event clicked");
  // };

  // console.log('MAP props', props);
  const MyMapComponent = withScriptjs(
    withGoogleMap(props => {
      // console.log('@', props);
      return (
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: userLat, lng: userLong }}
          defaultOptions={defaultMapOptions}
        >
        <Marker
          position={{ lat: userLat, lng: userLong }}
          key="userCoordsMarker"
          icon="http://maps.google.com/mapfiles/kml/pal3/icon40.png"
          id="userCoordsMarker"
        />
          <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
          >
            {coords && coords.length
              ? coords.map((coord, i) => {
                  return (
                    <Marker
                      position={{ lat: coord.latitude, lng: coord.longitude }}
                      key={i}
                      icon={path}
                      id={coord.id}
                      onClick={() => openPinModal(coord.id)}
                    />
                  );
                })
              : ''}
          </MarkerClusterer>
        </GoogleMap>
      );
    })
  );
  // console.log(width, height);
  return (
    <div className="map-container">
      <div className="map_component">
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={
            <div
              style={{
                height: mainHeight,
                width: width,
              }}
            />
          }
          containerElement={
            <div
              style={{
                height: mainHeight,
                width: width,
              }}
            />
          }
          mapElement={
            <div
              style={{
                height: mainHeight,
                width: width,
              }}
            />
          }
        />
      </div>
    </div>
  );
};

// loadingElement={<div style={{ height: `100%`, width: '100%' }} />}
// containerElement={<div style={{ height: `100%`, width: '100%' }} />}
// mapElement={<div style={{ height: `100%`, width: '100%' }} />}

// export default withPinModal(withUserCoords(withRouter(Map)));
export default withRouter(
  withPinModal(withUserCoords(withScreenSize(MainMaps)))
);
