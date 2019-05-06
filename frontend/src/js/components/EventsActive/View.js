//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { TrendingEvents } from './TrendingEvents';
import { JustDroppedEvents } from './JustDroppedEvents';
import { FomoEvents } from './FomoEvents';
import { ActivePinIcon } from '../material';
import { ParentListItem } from '../utils';

export const View = ({ toggleShowChildren, showChildren, ...props }) => {
  return (
    <ParentListItem
      primaryText="Active"
      toggleShowChildren={toggleShowChildren}
      showChildren={showChildren}
      showIcon={<ActivePinIcon />}
    >
      <TrendingEvents />
      <JustDroppedEvents />
      <FomoEvents />
    </ParentListItem>
  );
};
