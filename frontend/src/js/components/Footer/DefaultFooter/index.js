//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { FooterLogo } from '../../logo';

export const DefaultFooter = ({ height, ...props }) => {
  return <FooterLogo height={height} color="white" />;
};
