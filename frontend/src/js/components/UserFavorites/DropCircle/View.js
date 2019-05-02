//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { DropinUserIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = props => {
  return (
    <ChildListItem primaryText="Drop Circle">
      <DropinUserIcon />
    </ChildListItem>
  );
};
