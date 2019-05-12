//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ArchiveIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = ({ handleClose, setMarkerType, ...props }) => {
  return (
    <ChildListItem
      primaryText="Archived"
      handleClick={() => {
        setMarkerType('userHistory');
        handleClose();
      }}
    >
      <ArchiveIcon />
    </ChildListItem>
  );
};
