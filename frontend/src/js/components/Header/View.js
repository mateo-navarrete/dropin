//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { EventsMenu } from '../EventsMenu';
import { HeaderLogo } from '../logo';
// import { MenuButton } from '../menu';
import { AuthMenu } from '../AuthMenu';

export const View = ({ ...props }) => {
  // <MenuButton />
  return (
    <F>
      <EventsMenu />
      <HeaderLogo
        height={props.height}
        isCompact={props.isCompact}
        color="red"
      />
      <AuthMenu />
    </F>
  );
};
