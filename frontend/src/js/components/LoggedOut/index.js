import React, { Fragment as F } from 'react';
import { CompactMenu } from './CompactMenu';
import { DefaultMenu } from './DefaultMenu';

export const LoggedOut = ({ isCompact }) => {
  const renderView = isCompact ? <CompactMenu /> : <DefaultMenu />;
  return <F>{renderView}</F>;
};
