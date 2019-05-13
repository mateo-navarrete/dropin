//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ActiveEvents } from './ActiveEvents';
import { ArchivedEvents } from './ArchivedEvents';
import { DropinHistoryIcon } from '../material';
import { ParentListItem } from '../utils';

export const View = ({ handleClose, toggleShowChildren, showChildren, setMarkerType }) => {
  return (
    <ParentListItem
      primaryText="Drop History"
      toggleShowChildren={toggleShowChildren}
      showChildren={showChildren}
      showIcon={<DropinHistoryIcon />}
    >
      <ActiveEvents handleClose={handleClose} setMarkerType={setMarkerType} />
      <ArchivedEvents handleClose={handleClose} setMarkerType={setMarkerType} />
    </ParentListItem>
  );
};
