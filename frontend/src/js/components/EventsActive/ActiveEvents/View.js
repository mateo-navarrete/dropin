//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ActivePinIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ getEvents, handleClose, setMarkerType, ...props }) => {
  let eventObj = {
    url: '',
    latitude: props.coords.latitude,
    longitude: props.coords.longitude,
  };
  return (
    <ChildListItem
      primaryText="Active"
      handleClick={() => {
        getEvents(eventObj);
        setMarkerType('eventsList');
        handleClose();
      }}
    >
      <ActivePinIcon />
    </ChildListItem>
  );
};
