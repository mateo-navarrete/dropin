//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ArchiveIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ handleClose, ...props }) => {
  return (
    <ChildListItem
      primaryText="Archived"
      handleClick={() => {
        // getEvents('recent');
        handleClose();
      }}
    >
      <ArchiveIcon />
    </ChildListItem>
  );
};
