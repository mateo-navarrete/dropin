//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { NewPinIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ getEvents, handleClose, ...props }) => {
  let eventObj = {
    url: "recent",
    latitude: props.coords.latitude,
    longitude: props.coords.longitude
  }
  return (
    <ChildListItem
      primaryText="Just Dropped"
      handleClick={() => {
        getEvents(eventObj);
        handleClose();
      }}
    >
      <NewPinIcon />
    </ChildListItem>
  );
};
