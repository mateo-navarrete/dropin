//jscs:disable requireShorthandArrowFunctions
/*global google*/
import React, { Fragment as F } from 'react';
import { Marker } from 'react-google-maps';

const colors = ['cyan', 'green', 'magenta'];
const getRandomNum = n => (Math.random() * n) >> 0;

const randomEventMarkerColor = colors[getRandomNum(colors.length)];

export const UserMarker = ({ isMarkerShown, position, handleClick }) => {
  const renderMarker = isMarkerShown ? (
    <Marker
      position={position}
      onClick={handleClick}
      icon={{
        url: require(`../../../../assets/marker_${randomEventMarkerColor}_pin.png`), //'/img/icon.svg',
        scaledSize: new google.maps.Size(64, 64),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(32, 64),
      }}
    />
  ) : (
    ''
  );
  return <F>{renderMarker}</F>;
};
