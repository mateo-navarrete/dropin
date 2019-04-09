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
import { withUserCoords } from '../../containers';
import { withPinModal } from '../../containers';

const Map = props => {
  let path;
  const { coords, userCoords } = props;
  let userLatitude = userCoords.latitude;
  let userLongitude = userCoords.longitude;
  switch (props.match.path.slice(1)) {
    case 'education':
      path = 'http://maps.google.com/mapfiles/kml/shapes/schools.png';
      break;
    case 'entertainment':
      path = 'http://maps.google.com/mapfiles/kml/shapes/arts.png';
      break;
    case 'family':
      path = 'http://maps.google.com/mapfiles/kml/shapes/hiker.png';
      break;
    case 'food':
      path = 'http://maps.google.com/mapfiles/kml/shapes/snack_bar.png';
      break;
    case 'gaming':
      path = 'http://maps.google.com/mapfiles/kml/shapes/motorcycling.png';
      break;
    case 'humanitarian':
      path = 'http://maps.google.com/mapfiles/kml/shapes/hospitals.png';
      break;
    case 'music':
      path = 'http://maps.google.com/mapfiles/kml/shapes/movies.png';
      break;
    case 'party':
      path = 'http://maps.google.com/mapfiles/kml/shapes/bars.png';
      break;
    case 'religious':
      path = 'http://maps.google.com/mapfiles/kml/shapes/church.png';
      break;
    case 'sports':
      path = 'http://maps.google.com/mapfiles/kml/shapes/golf.png';
      break;
    default:
      path = 'http://maps.google.com/mapfiles/kml/paddle/red-circle.png';
      break;
  }

  // const handleClick = event => {
  //   console.log("handle click triggered");
  //   console.log("event!!", event);
  //   window.alert("event clicked");
  // };

  // console.log("MAP props", props)
  const MyMapComponent = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: userLatitude, lng: userLongitude }}
      >
        {coords.map((coord, i) => {
          return (
            <Marker
              position={{ lat: coord.latitude, lng: coord.longitude }}
              key={i}
              icon={path}
              onClick={props.openPinModal}
            />
          );
        })}
      </GoogleMap>
    ))
  );

  return (
    <div className="map-container">
      <div className="map_component">
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%`, width: '100%' }} />}
          containerElement={<div style={{ height: `100%`, width: '100%' }} />}
          mapElement={<div style={{ height: `100%`, width: '100%' }} />}
        />
      </div>
    </div>
  );
};

export default withPinModal(withUserCoords(withRouter(Map)));
