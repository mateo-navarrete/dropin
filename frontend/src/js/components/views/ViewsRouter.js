import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { HomeView } from '../views';
import { withDimensions } from '../../containers';

export const ViewsRouter = () => {
  return (
    <Switch>
      <Route path="/" render={withRouter(withDimensions(HomeView))} />
    </Switch>
  );
};
