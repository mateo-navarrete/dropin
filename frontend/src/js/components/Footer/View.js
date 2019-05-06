import React, { Fragment as F } from 'react';
import { CompactFooter } from './CompactFooter';
import { DefaultFooter } from './DefaultFooter';

export const View = ({ isDeviceCompact, ...props }) => {
  const renderView = isDeviceCompact ? (
    <CompactFooter {...props} />
  ) : (
    <DefaultFooter {...props} />
  );
  return <F>{renderView}</F>;
};
