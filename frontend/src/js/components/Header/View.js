//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Wrapper } from './Wrapper';
// import { EventsMenu } from '../EventsMenu';
import { HeaderLogo } from '../logo';
import { AuthMenu } from '../AuthMenu';

// <EventsMenu />
export const View = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <HeaderLogo
        height={props.height}
        isCompact={props.isCompact}
        color="red"
      />
      <AuthMenu />
    </Wrapper>
  );
};
