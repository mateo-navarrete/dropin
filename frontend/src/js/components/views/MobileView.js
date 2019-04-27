//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { Main } from '../Main';
import { Footer } from '../Footer';

export const MobileView = ({
  width,
  mainHeight,
  footerHeight,
  isMobileDevice,
  ...props,
}) => {
  return (
    <F>
      <Main width={width} height={mainHeight} />
      <Footer
        isMobileDevice={isMobileDevice}
        width={width}
        height={footerHeight}
      />
    </F>
  );
};
