//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { CssBaseline, ResizeListener } from './components/utils';
import { ViewsRouter } from './components/views';

export const App = () => {
  return (
    <F>
      <CssBaseline />
      <ResizeListener />
      <ViewsRouter />
    </F>
  );
};
