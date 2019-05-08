//jscs:disable requireShorthandArrowFunctions
/*global google*/
import React from 'react';
import { Marker } from 'react-google-maps';

const colors = ['cyan', 'green', 'magenta'];
const getRandomNum = n => (Math.random() * n) >> 0;

const randomMarkerColor = colors[getRandomNum(colors.length)];

export const View = props => {
  // console.log('@pHC', props.handleClick);
  return (
    <Marker
      key={props.id}
      position={{ lat: props.latitude, lng: props.longitude }}
      onClick={props.handleClick}
      icon={{
        url: require(`../../../assets/marker_${randomMarkerColor}_pin.png`), //'/img/icon.svg',
        scaledSize: new google.maps.Size(64, 64),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(32, 64),
      }}
    />
  );
};
