//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ActivePinIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ getEvents, handleClose, ...props }) => {
  return (
    <ChildListItem
      primaryText="Active"
      handleClick={() => {
        getEvents();
        handleClose();
      }}
    >
      <ActivePinIcon />
    </ChildListItem>
  );
};
