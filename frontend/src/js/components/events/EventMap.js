import React, { Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps';

const prepend = 'https://maps.googleapis.com/maps/api/js?key=';
const apiKey = 'AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg';
//process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const append = '&v=3.exp&libraries=geometry,drawing,places';
const mapURL = prepend + apiKey + append;

class Map extends Component {
  render() {
    const GoogleMapExample = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
          defaultZoom={13}
        />
      ))
    );
    return (
      <div>
        <GoogleMapExample
          googleMapURL={mapURL}
          containerElement={<div style={{ height: `500px`, width: '500px' }} />}
          loadingElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export const EventMap = Map;
