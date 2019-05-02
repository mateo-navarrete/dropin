//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { TimerIcon } from '../../material';
import { ChildListItem, ParentListItem } from '../../utils';

export const View = ({ toggleShowChildren, showChildren, ...props }) => {
  return (
    <ParentListItem
      primaryText="Drop Duration"
      toggleShowChildren={toggleShowChildren}
      showChildren={showChildren}
      showIcon={<TimerIcon />}
    >
      <ChildListItem
        toggleShowChildren={toggleShowChildren}
        primaryText="change default duration: 15m 30m 1hr 2hr"
      />
    </ParentListItem>
  );
};
