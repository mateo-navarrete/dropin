//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { ToggleMenuButton, ToggleSettingsButton } from '../buttons';
import { LogoFooterButton } from '../logo';

export const MobileFooter = ({ height, ...props }) => {
  return (
    <F>
      <ToggleSettingsButton />
      <LogoFooterButton height={height} color="white" />
      <ToggleMenuButton />
    </F>
  );
};
