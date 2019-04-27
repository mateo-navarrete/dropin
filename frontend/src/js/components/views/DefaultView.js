//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';

export const DefaultView = ({
  width,
  headerHeight,
  mainHeight,
  footerHeight,
  isMobileDevice,
  ...props,
}) => {
  return (
    <F>
      <Header width={width} height={headerHeight} />
      <Main width={width} height={mainHeight} />
      <Footer
        isMobileDevice={isMobileDevice}
        width={width}
        height={footerHeight}
      />
    </F>
  );
};
