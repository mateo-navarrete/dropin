//jscs:disable requireShorthandArrowFunctions
/*global google*/
import React, { Fragment as F } from 'react';
import { Marker } from 'react-google-maps';

const colors = ['cyan', 'green', 'magenta'];
const getRandomNum = n => (Math.random() * n) >> 0;

const randomMarkerColor = colors[getRandomNum(colors.length)];

export const EventsMarkers = ({ eventsList, userEventsList, userHistory }) => {
  // console.log(eventsList, userEventsList, userHistory);
  const renderEvents =
    eventsList.length || userEventsList.length || userHistory.length
      ? eventsList.map(e => {
          return (
            <Marker
              key={e.id}
              position={{ lat: e.latitude, lng: e.longitude }}
              onClick={() => console.log('I got clicked')}
              icon={{
                url: require(`../../../../assets/marker_${randomMarkerColor}_pin.png`), //'/img/icon.svg',
                scaledSize: new google.maps.Size(64, 64),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(32, 64),
              }}
            />
          );
        })
      : '';
  return <F>{renderEvents}</F>;
};
