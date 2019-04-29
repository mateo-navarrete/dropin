/*global google*/
import React from 'react';
// import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { CustomMapControl } from './CustomMapControl';
import { withDimensions, withGeolocation } from '../../containers';
import { IconButton, MyLocationIcon } from '../material';
const prepend = 'https://maps.googleapis.com/maps/api/js?key=';
const apiKey = 'AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg'; //process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const append = '&v=3.exp&libraries=geometry,drawing,places';
const mapURL = prepend + apiKey + append;

// var map;
// var chicago = { lat: 41.85, lng: -87.65 };
//
// const CenterControl = (controlDiv, map) => {
//   // Set CSS for the control border.
//   var controlUI = document.createElement('div');
//   controlUI.style.backgroundColor = '#fff';
//   controlUI.style.border = '2px solid #fff';
//   controlUI.style.borderRadius = '3px';
//   controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
//   controlUI.style.cursor = 'pointer';
//   controlUI.style.marginBottom = '22px';
//   controlUI.style.textAlign = 'center';
//   controlUI.title = 'Click to recenter the map';
//   controlDiv.appendChild(controlUI);
//
//   // Set CSS for the control interior.
//   var controlText = document.createElement('div');
//   controlText.style.color = 'rgb(25,25,25)';
//   controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
//   controlText.style.fontSize = '16px';
//   controlText.style.lineHeight = '38px';
//   controlText.style.paddingLeft = '5px';
//   controlText.style.paddingRight = '5px';
//   controlText.innerHTML = 'Center Map';
//   controlUI.appendChild(controlText);
//
//   // Setup the click event listeners: simply set the map to Chicago.
//   controlUI.addEventListener('click', function () {
//     map.setCenter(chicago);
//   });
// };
//
// var centerControlDiv = document.createElement('div');
// var centerControl = new CenterControl(centerControlDiv, map);
//
// centerControlDiv.index = 1;
// map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

const GoogleMapWrapper = ({
  gotUserCoords,
  userCoords,
  // recenter,
  // center,
  ...props,
}) => {
  // console.log(props);
  // const handleClick = e => {
  //   console.log(e, userCoords);
  // };

  return gotUserCoords ? (
    <GoogleMap
      defaultZoom={15}
      center={userCoords}
      defaultOptions={{
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT,
        },
      }}
    >
      <CustomMapControl>
        <IconButton onClick={props.onCenterClick}>
          <MyLocationIcon fontSize="default" />
        </IconButton>
      </CustomMapControl>
      {props.isMarkerShown && (
        <Marker position={userCoords} onClick={props.onMarkerClick} />
      )}
    </GoogleMap>
  ) : null;
};

const LoadingElement = <div style={{ height: `100%` }} />;
const MapElement = <div style={{ height: `100%` }} />;

const MyMapComponent = withScriptjs(withGoogleMap(GoogleMapWrapper));

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
    recenter: false,
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  componentWillUnmount = () => {
    clearTimeout(this.timeout);
    clearTimeout(this.timeout2);
  };

  delayedShowMarker = () => {
    this.timeout = setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  resetCenter = () => {
    this.timeout2 = setTimeout(() => {
      this.setState({ recenter: false });
    }, 100);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  handleCenterClick = e => {
    this.props.getGeolocation();
    //this.setState({ recenter: true });
    // console.log(this.props);
    //TODO => this.props.getGeolocation()
    // this.resetCenter();
  };

  render() {
    const {
      coords: { latitude, longitude },
    } = this.props;
    const ContainerElement = (
      <div
        style={{
          height: this.props.mainHeight + this.props.footerHeight + 21,
          overflow: 'hidden',
        }}
      />
    );
    let gotUserCoords = latitude ? true : false;
    let userCoords = { lat: latitude, lng: longitude };

    // console.log(this.state);

    return (
      <MyMapComponent
        gotUserCoords={gotUserCoords}
        userCoords={userCoords}
        recenter={this.state.center}
        center={userCoords}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        onCenterClick={this.handleCenterClick}
        googleMapURL={mapURL}
        loadingElement={LoadingElement}
        containerElement={ContainerElement}
        mapElement={MapElement}
        {...this.props}
      />
    );
  }
}

export const MyMap = withDimensions(withGeolocation(MyFancyComponent));
