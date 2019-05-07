//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { DropinEventIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ handleClose, ...props }) => {
  return (
    <ChildListItem
      primaryText="Drop Tags"
      handleClick={() => {
        // getEvents('expiring');
        handleClose();
      }}
    >
      <DropinEventIcon />
    </ChildListItem>
  );
};
