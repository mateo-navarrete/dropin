//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ArchiveIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = props => {
  return (
    <ChildListItem primaryText="Archived">
      <ArchiveIcon />
    </ChildListItem>
  );
};
