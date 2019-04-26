import React from 'react';
import ReactDOM from 'react-dom';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
const { compose, withProps, withStateHandlers } = require('recompose');
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require('react-google-maps');

const gKey = 'AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg';

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(
    () => ({
      isOpen: false,
      counter: 0,
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
      onButtonClick: ({ counter }) => () => ({
        counter: counter + 1,
      }),
    }
  ),
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${gKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onToggleOpen}
    >
      <InfoBox
        options={{
          closeBoxURL: ``,
          enableEventPropagation: true,
          boxStyle: {
            width: '200px',
            height: '100px',
            background: 'white',
            overflow: 'visible',
          },
          pixelOffset: new window.google.maps.Size(-50, 10),
        }}
      >
        <div>
          <input type="text" value="hello i am text" />
          <button onClick={props.onButtonClick}>Clickables</button>
          <h2>Example: {props.counter}</h2>
        </div>
      </InfoBox>
    </Marker>
  </GoogleMap>
));

ReactDOM.render(
  <MapWithAMakredInfoWindow isMarkerShown />,
  document.getElementById('root')
);
