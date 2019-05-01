import React, { Fragment as F } from 'react';
import { CompactView } from './CompactView';
import { DefaultView } from './DefaultView';

export const View = props => {
  const isDeviceCompact = !(props.width > 450 && props.height > 450);
  const renderView = isDeviceCompact ? (
    <CompactView isDeviceCompact={isDeviceCompact} {...props} />
  ) : (
    <DefaultView isDeviceCompact={isDeviceCompact} {...props} />
  );
  return <F>{renderView}</F>;
};
