/*global google*/
import React, { Fragment as F } from 'react';
// import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { CustomMapControl } from './CustomMapControl';
// import { MapStyles } from './MapStyles';
import { withDimensions, withGeolocation, withEvents } from '../../containers';
import { IconButton, MyLocationIcon } from '../material';
const prepend = 'https://maps.googleapis.com/maps/api/js?key=';
const apiKey = 'AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg'; //process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const append = '&v=3.exp&libraries=geometry,drawing,places';
const mapURL = prepend + apiKey + append;

// const mapTypes = ['night', 'red', 'creed', 'veins', 'chill', 'pinRed'];
const colors = ['cyan', 'green', 'magenta'];
const getRandomNum = n => (Math.random() * n) >> 0;

const MarkerWrapper = ({ position, handleClick }) => {
  const randomColor = colors[getRandomNum(colors.length)];

  return (
    <Marker
      position={position}
      onClick={handleClick}
      icon={{
        url: require(`../../../assets/marker_${randomColor}_pin.png`), //'/img/icon.svg',
        scaledSize: new google.maps.Size(64, 64),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(32, 64),
      }}
    />
  );
};

const EventsListMarkers = ({ eventsList }) => {
  const randomColor = colors[getRandomNum(colors.length)];
  const renderEvents = eventsList.map(e => {
    return (
      <Marker
        key={e.id}
        position={{ lat: e.latitude, lng: e.longitude }}
        onClick={() => console.log('I got clicked')}
        icon={{
          url: require(`../../../assets/marker_${randomColor}_pin.png`), //'/img/icon.svg',
          scaledSize: new google.maps.Size(64, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(32, 64),
        }}
      />
    );
  });
  return <F>{renderEvents}</F>;
};

const GoogleMapWrapper = ({ gotUserCoords, userCoords, ...props }) => {
  // const randomColor = colors[getRandomNum(colors.length)];
  // // const randomMap = MapStyles[mapTypes[getRandomNum(mapTypes.length)]];
  return gotUserCoords ? (
    <GoogleMap
      defaultZoom={15}
      center={userCoords}
      defaultOptions={{
        clickableIcons: false,
        disableDefaultUI: true,
        // styles: MapStyles.night,
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
        <MarkerWrapper
          position={userCoords}
          handleClick={props.onMarkerClick}
        />
      )}
      {props.eventsList.length && (
        <EventsListMarkers eventsList={props.eventsList} />
      )}
    </GoogleMap>
  ) : null;
};

// {props.isMarkerShown && (
//   <Marker
//     position={userCoords}
//     onClick={props.onMarkerClick}
//     icon={{
//       url: require(`../../../assets/marker_${randomColor}_pin.png`), //'/img/icon.svg',
//       scaledSize: new google.maps.Size(64, 64),
//       origin: new google.maps.Point(0, 0),
//       anchor: new google.maps.Point(32, 64)
//     }}
//   />
// )}

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
        eventsList={this.props.events}
        {...this.props}
      />
    );
  }
}

export const MyMap = withEvents(
  withDimensions(withGeolocation(MyFancyComponent))
);
