//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ActiveEvents } from './ActiveEvents';
import { JustDroppedEvents } from './JustDroppedEvents';
import { FomoEvents } from './FomoEvents';
import { FilterListIcon } from '../material';
import { ParentListItem } from '../utils';

export const View = ({
  handleClose,
  toggleShowChildren,
  showChildren,
  getEvents,
  ...props,
}) => {
  return (
    <ParentListItem
      primaryText="Filters"
      toggleShowChildren={toggleShowChildren}
      showChildren={showChildren}
      showIcon={<FilterListIcon />}
    >
      <ActiveEvents getEvents={getEvents} handleClose={handleClose} />
      <JustDroppedEvents getEvents={getEvents} handleClose={handleClose} />
      <FomoEvents getEvents={getEvents} handleClose={handleClose} />
    </ParentListItem>
  );
};

// TODO:
// <ActiveEvents getEvents={getEvents} handleClose={handleClose} />
// <TrendingEvents getEvents={getEvents} handleClose={handleClose} />
// <JustDroppedEvents getEvents={getEvents} handleClose={handleClose} />
// <FomoEvents getEvents={getEvents} handleClose={handleClose} />
