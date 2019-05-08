//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ActiveEvents } from './ActiveEvents';
import { ArchivedEvents } from './ArchivedEvents';
import { DropinHistoryIcon } from '../material';
import { ParentListItem } from '../utils';

export const View = ({ handleClose, toggleShowChildren, showChildren }) => {
  return (
    <ParentListItem
      primaryText="Drop History"
      toggleShowChildren={toggleShowChildren}
      showChildren={showChildren}
      showIcon={<DropinHistoryIcon />}
    >
      <ActiveEvents handleClose={handleClose} />
      <ArchivedEvents handleClose={handleClose} />
    </ParentListItem>
  );
};
