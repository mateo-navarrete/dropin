import React from 'react';
import { CompactFooter } from './CompactFooter';
import { DefaultFooter } from './DefaultFooter';
import { View } from './View';

export const Footer = ({ isDeviceCompact, ...props }) => {
  const renderFooter = isDeviceCompact ? (
    <CompactFooter {...props} />
  ) : (
    <DefaultFooter {...props} />
  );
  return <View {...props}>{renderFooter}</View>;
};
