//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { FooterLogo } from '../../logo';
import { MenuButton } from '../../menu';
import { AuthMenu } from '../../AuthMenu';

export const CompactFooter = ({ height, ...props }) => {
  return (
    <F>
      <MenuButton />
      <FooterLogo height={height} color="white" />
      <AuthMenu />
    </F>
  );
};
