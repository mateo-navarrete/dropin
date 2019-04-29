//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { Main } from '../Main';
import { Footer } from '../Footer';

export const CompactView = ({
  width,
  mainHeight,
  footerHeight,
  isDeviceCompact,
  ...props,
}) => {
  return (
    <F>
      <Main width={width} height={mainHeight} />
      <Footer
        isDeviceCompact={isDeviceCompact}
        width={width}
        height={footerHeight}
      />
    </F>
  );
};
