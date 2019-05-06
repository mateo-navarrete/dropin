//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { HotIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = props => {
  return (
    <ChildListItem primaryText="Trending">
      <HotIcon />
    </ChildListItem>
  );
};
