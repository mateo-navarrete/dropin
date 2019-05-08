//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { FomoIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ getEvents, handleClose, ...props }) => {
  let eventObj = {
    url: "expiring",
    latitude: props.coords.latitude,
    longitude: props.coords.longitude
  }
  return (
    <ChildListItem
      primaryText="Fomo"
      handleClick={() => {
        getEvents(eventObj);
        handleClose();
      }}
    >
      <FomoIcon />
    </ChildListItem>
  );
};
