//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ActivePinIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ handleClose, ...props }) => {
  return (
    <ChildListItem
      primaryText="Active"
      handleClick={() => {
        // getEvents('recent');
        console.log("active events clicked")
        handleClose();
      }}
    >
      <ActivePinIcon />
    </ChildListItem>
  );
};
