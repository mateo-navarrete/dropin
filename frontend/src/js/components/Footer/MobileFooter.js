//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { LogoFooterButton } from '../logo';
import { MenuButton } from '../menu';
import { CompactAuthStatusView } from '../auth';

export const MobileFooter = ({ height, ...props }) => {
  return (
    <F>
      <MenuButton />
      <LogoFooterButton height={height} color="white" />
      <CompactAuthStatusView isLoggedIn={false} />
    </F>
  );
};
