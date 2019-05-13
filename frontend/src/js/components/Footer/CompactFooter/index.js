//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { FooterLogo } from '../../logo';
// import { EventsMenu } from '../../EventsMenu';
import { AuthMenu } from '../../AuthMenu';
// <EventsMenu />

export const CompactFooter = ({ height, ...props }) => {
  return (
    <F>
      <FooterLogo height={height} color="white" />
      <AuthMenu />
    </F>
  );
};
