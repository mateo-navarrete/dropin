import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { View } from './View';
import { withDimensions } from '../../containers';

export const Router = () => {
  return (
    <Switch>
      <Route path="/" render={withRouter(withDimensions(View))} />
    </Switch>
  );
};
