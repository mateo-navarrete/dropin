//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { LogoFooterButton } from '../logo';
import { MenuButton } from '../menu';
import { UserStatusButton } from '../user';

export const MobileFooter = ({ height, ...props }) => {
  return (
    <F>
      <MenuButton />
      <LogoFooterButton height={height} color="white" />
      <UserStatusButton isLoggedIn={true} />
    </F>
  );
};
