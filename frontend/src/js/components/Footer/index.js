import React from 'react';
import { DefaultFooter } from './DefaultFooter';
import { MobileFooter } from './MobileFooter';
import { View } from './View';

export const Footer = ({ isMobileDevice, ...props }) => {
  const renderFooter = isMobileDevice ? (
    <MobileFooter {...props} />
  ) : (
    <DefaultFooter {...props} />
  );
  return <View {...props}>{renderFooter}</View>;
};
