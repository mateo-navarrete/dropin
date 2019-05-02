//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { VisibilityOff } from '../../material';
import { ChildListItem, ParentListItem } from '../../utils';

export const View = ({ toggleShowChildren, showChildren, ...props }) => {
  return (
    <ParentListItem
      primaryText="Privacy"
      toggleShowChildren={toggleShowChildren}
      showChildren={showChildren}
      showIcon={<VisibilityOff />}
    >
      <ChildListItem
        toggleShowChildren={toggleShowChildren}
        primaryText="make my profile visible in search results"
      />
    </ParentListItem>
  );
};
