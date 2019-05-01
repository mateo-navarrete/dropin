//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { LogoHeader } from '../logo';
import { MenuButton } from '../menu';
import { AuthStatus } from '../auth';

export const View = ({ ...props }) => {
  return (
    <F>
      <MenuButton />
      <LogoHeader
        height={props.height}
        isCompact={props.isCompact}
        color="red"
      />
      <AuthStatus />
    </F>
  );
};
