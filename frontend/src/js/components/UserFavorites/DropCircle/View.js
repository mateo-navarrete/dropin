//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { DropinUserIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ handleClose, ...props }) => {
  return (
    <ChildListItem
      primaryText="Drop Circle"
      handleClick={() => {
        // getEvents('expiring');
        handleClose();
      }}
    >
      <DropinUserIcon />
    </ChildListItem>
  );
};
