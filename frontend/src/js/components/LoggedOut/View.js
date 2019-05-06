import React, { Fragment as F } from 'react';
import { CompactMenu } from './CompactMenu';
import { DefaultMenu } from './DefaultMenu';

// TODO: move DropDownMenu here as HOC

export const View = ({ isCompact }) => {
  const renderView = isCompact ? <CompactMenu /> : <DefaultMenu />;
  return <F>{renderView}</F>;
};
