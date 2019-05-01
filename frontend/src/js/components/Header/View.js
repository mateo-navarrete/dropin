//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { HeaderLogo } from '../logo';
import { MenuButton } from '../menu';
import { AuthMenu } from '../AuthMenu';

export const View = ({ ...props }) => {
  return (
    <F>
      <MenuButton />
      <HeaderLogo
        height={props.height}
        isCompact={props.isCompact}
        color="red"
      />
      <AuthMenu />
    </F>
  );
};
