//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { FomoIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ getEvents, handleClose, setMarkerType, ...props }) => {
  let eventObj = {
    url: 'expiring',
    latitude: props.coords.latitude,
    longitude: props.coords.longitude,
  };
  return (
    <ChildListItem
      primaryText="FOMO"
      handleClick={() => {
        getEvents(eventObj);
        setMarkerType('eventsList');
        handleClose();
      }}
    >
      <FomoIcon />
    </ChildListItem>
  );
};
