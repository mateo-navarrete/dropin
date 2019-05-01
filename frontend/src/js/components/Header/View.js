//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { HeaderLogo } from '../logo';
import { MenuButton } from '../menu';
import { AuthStatus } from '../auth';

export const View = ({ ...props }) => {
  return (
    <F>
      <MenuButton />
      <HeaderLogo
        height={props.height}
        isCompact={props.isCompact}
        color="red"
      />
      <AuthStatus />
    </F>
  );
};
