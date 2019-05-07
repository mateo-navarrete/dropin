//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { HotIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ getEvents, handleClose, ...props }) => {
  return (
    <ChildListItem
      primaryText="Trending"
      handleClick={() => {
        getEvents('trending');
        handleClose();
      }}
    >
      <HotIcon />
    </ChildListItem>
  );
};
