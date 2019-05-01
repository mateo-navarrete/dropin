//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { LogoFooterButton } from '../../logo';
import { MenuButton } from '../../menu';
import { AuthStatus } from '../../auth';

export const CompactFooter = ({ height, ...props }) => {
  return (
    <F>
      <MenuButton />
      <LogoFooterButton height={height} color="white" />
      <AuthStatus />
    </F>
  );
};
