//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { DropinEventIcon } from '../../material';
import { ChildListItem } from '../../utils';

export const View = props => {
  return (
    <ChildListItem primaryText="Drop Tags">
      <DropinEventIcon />
    </ChildListItem>
  );
};
