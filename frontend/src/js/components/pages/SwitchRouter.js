import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {
  EventsPage,
  DropsPage,
  // LandingPage,
  SigninPage
} from '.';

export const SwitchRouter = props => {
  return (
    <Switch>
      <Route path="/events" render={withRouter(EventsPage)} />
      <Route path="/signin" render={withRouter(SigninPage)} />
      <Route path="/music" render={withRouter(DropsPage)} />
      <Route path="/drops/:id" render={withRouter(DropsPage)} />
      <Route path="/" render={withRouter(DropsPage)} />
    </Switch>
  );
};
