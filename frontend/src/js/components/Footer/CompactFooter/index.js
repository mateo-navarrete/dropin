//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { FooterLogo } from '../../logo';
import { EventsMenu } from '../../EventsMenu';
import { AuthMenu } from '../../AuthMenu';

export const CompactFooter = ({ height, ...props }) => {
  return (
    <F>
      <EventsMenu />
      <FooterLogo height={height} color="white" />
      <AuthMenu />
    </F>
  );
};
