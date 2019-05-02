//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { FomoIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = props => {
  return (
    <ChildListItem primaryText="Fomo">
      <FomoIcon />
    </ChildListItem>
  );
};
