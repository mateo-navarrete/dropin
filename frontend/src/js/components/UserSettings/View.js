//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { DurationSettings } from './DurationSettings';
import { PrivacySettings } from './PrivacySettings';
import { SettingsIcon } from '../material';
import { ParentListItem } from '../utils';

export const View = ({ toggleShowChildren, showChildren, ...props }) => {
  return (
    <ParentListItem
      primaryText="Drop History"
      toggleShowChildren={toggleShowChildren}
      showChildren={showChildren}
      showIcon={<SettingsIcon />}
    >
      <DurationSettings />
      <PrivacySettings />
    </ParentListItem>
  );
};
