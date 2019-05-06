//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { Header } from '../../Header';
import { Main } from '../../Main';
import { Footer } from '../../Footer';

export const DefaultView = ({
  height,
  width,
  headerHeight,
  mainHeight,
  footerHeight,
  isDeviceCompact,
  ...props,
}) => {
  return (
    <F>
      <Header isCompact={height > width} width={width} height={headerHeight} />
      <Main width={width} height={mainHeight} />
      <Footer
        isDeviceCompact={isDeviceCompact}
        width={width}
        height={footerHeight}
      />
    </F>
  );
};
