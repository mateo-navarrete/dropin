import React, { Fragment as F } from 'react';
import { DefaultView, MobileView } from '.';

export const HomeView = props => {
  const isMobileDevice = !(props.width > 450 && props.height > 450);
  const renderView = isMobileDevice ? (
    <MobileView isMobileDevice={isMobileDevice} {...props} />
  ) : (
    <DefaultView isMobileDevice={isMobileDevice} {...props} />
  );
  return <F>{renderView}</F>;
};
