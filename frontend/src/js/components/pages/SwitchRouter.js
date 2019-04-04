import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { EventsPage, LandingPage, SigninPage } from '.';

export const SwitchRouter = props => {
  return (
    <Switch>
      <Route path="/events" render={withRouter(EventsPage)} />
      <Route path="/signin" render={withRouter(SigninPage)} />
      <Route path="/" render={withRouter(LandingPage)} />
    </Switch>
  );
};
