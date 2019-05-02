//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ActiveEvents } from './ActiveEvents';
import { TrendingEvents } from './TrendingEvents';
import { JustDroppedEvents } from './JustDroppedEvents';
import { FomoEvents } from './FomoEvents';
import { FilterListIcon } from '../material';
import { ParentListItem } from '../utils';

export const View = ({ toggleShowChildren, showChildren, ...props }) => {
  return (
    <ParentListItem
      primaryText="Filters"
      toggleShowChildren={toggleShowChildren}
      showChildren={showChildren}
      showIcon={<FilterListIcon />}
    >
      <ActiveEvents />
      <TrendingEvents />
      <JustDroppedEvents />
      <FomoEvents />
    </ParentListItem>
  );
};
