//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { FomoIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ getEvents, handleClose, ...props }) => {
  return (
    <ChildListItem
      primaryText="Fomo"
      handleClick={() => {
        getEvents('expiring');
        handleClose();
      }}
    >
      <FomoIcon />
    </ChildListItem>
  );
};
