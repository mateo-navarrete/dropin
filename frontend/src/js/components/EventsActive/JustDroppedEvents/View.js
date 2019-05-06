//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { NewPinIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ getEvents, handleClose, ...props }) => {
  return (
    <ChildListItem
      primaryText="Just Dropped"
      handleClick={() => {
        getEvents('recent');
        handleClose();
      }}
    >
      <NewPinIcon />
    </ChildListItem>
  );
};
