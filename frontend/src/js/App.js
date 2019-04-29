//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { AuthStatusListener } from './components/auth';
import { GeolocationListener } from './components/user';
import { CssBaseline, DimensionsListener } from './components/utils';
import { ViewsRouter } from './components/views';

export const App = () => {
  return (
    <F>
      <AuthStatusListener />
      <GeolocationListener />
      <CssBaseline />
      <DimensionsListener />
      <ViewsRouter />
    </F>
  );
};
