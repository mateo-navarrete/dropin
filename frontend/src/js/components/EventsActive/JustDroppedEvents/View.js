//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { NewPinIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = props => {
  return (
    <ChildListItem primaryText="Just Dropped">
      <NewPinIcon />
    </ChildListItem>
  );
};
