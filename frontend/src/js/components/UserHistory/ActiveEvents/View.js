//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ActivePinIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = props => {
  return (
    <ChildListItem primaryText="Active">
      <ActivePinIcon />
    </ChildListItem>
  );
};
