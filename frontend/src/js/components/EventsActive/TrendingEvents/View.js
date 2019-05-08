//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { HotIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ getEvents, handleClose, ...props }) => {
  let eventObj = {
    url: "trending",
    latitude: props.coords.latitude,
    longitude: props.coords.longitude
  }
  return (
    <ChildListItem
      primaryText="Trending"
      handleClick={() => {
        getEvents(eventObj);
        handleClose();
      }}
    >
      <HotIcon />
    </ChildListItem>
  );
};
