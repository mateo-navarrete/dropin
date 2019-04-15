import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { LandingPage } from '..';

export const SwitchRouter = props => {
  return (
    <Switch>
      <Route path="/" render={withRouter(LandingPage)} />
    </Switch>
  );
};
