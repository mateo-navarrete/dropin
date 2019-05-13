//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ActivePinIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ handleClose, setMarkerType, ...props }) => {
  return (
    <ChildListItem
      primaryText="Active"
      handleClick={() => {
        setMarkerType('userEventsList');
        handleClose();
      }}
    >
      <ActivePinIcon />
    </ChildListItem>
  );
};
