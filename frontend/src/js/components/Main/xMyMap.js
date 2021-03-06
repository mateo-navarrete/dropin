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
import { MapStyles } from './MapStyles';
import {
  withDimensions,
  withGeolocation,
  withEvents,
  withUser
} from '../../containers';
import { IconButton, MyLocationIcon } from '../material';
const prepend = 'https://maps.googleapis.com/maps/api/js?key=';
const apiKey = 'AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg'; //process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const append = '&v=3.exp&libraries=geometry,drawing,places';
const mapURL = prepend + apiKey + append;

// const mapTypes = ['night', 'red', 'creed', 'veins', 'chill', 'pinRed'];
const colors = ['cyan', 'green', 'magenta'];
const getRandomNum = n => (Math.random() * n) >> 0;

const randomEventMarkerColor = colors[getRandomNum(colors.length)];
const MarkerWrapper = ({ position, handleClick }) => {
  return (
    <Marker
      position={position}
      onClick={handleClick}
      icon={{
        url: require(`../../../assets/marker_${randomEventMarkerColor}_pin.png`), //'/img/icon.svg',
        scaledSize: new google.maps.Size(64, 64),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(32, 64),
      }}
    />
  );
};
// TODO: perhaps
//let eventListToRender = props[props.selectedEvents]
// refactor => EventsListMarkers & lines 97-103 etc => own script.js & withSelectedEvents etc

const randomMarkerColor = colors[getRandomNum(colors.length)];
const EventsListMarkers = ({ eventsList, userEventsList, userHistory }) => {
  // console.log(exventsList, userEventsList, userHistory);
  const renderEvents = userHistory.map(e => {
    return (
      <Marker
        key={e.id}
        position={{ lat: e.latitude, lng: e.longitude }}
        onClick={() => console.log('I got clicked')}
        icon={{
          url: require(`../../../assets/marker_${randomMarkerColor}_pin.png`), //'/img/icon.svg',
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
  // MapStyles.night
  // const randomMap = MapStyles[mapTypes[getRandomNum(mapTypes.length)]];
  return gotUserCoords ? (
    <GoogleMap
      defaultZoom={15}
      center={userCoords}
      defaultOptions={{
        clickableIcons: false,
        disableDefaultUI: true,
        //styles: MapStyles.night, //randomMap,
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
      {(props.eventsList.length ||
        props.userEventsList ||
        props.userHistory) && (
        <EventsListMarkers
          eventsList={props.eventsList}
          userEventsList={props.userEventsList}
          userHistory={props.userHistory}
        />
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

    // console.log('@', this.props.eventsList);

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
        eventsList={this.props.eventsList}
        userEventsList={this.props.userEventsList}
        userHistory={this.props.userHistory}
        {...this.props}
      />
    );
  }
}

export const MyMap = withEvents(
  withUser(withDimensions(withGeolocation(MyFancyComponent)))
);
