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
// <Route path="/music" render={withRouter(DropsPage)} />
// <Route path="/drops/:id" render={withRouter(DropsPage)} />
// <Route path="/signin" render={withRouter(SigninPage)} />
// <Route path="/events" render={withRouter(EventsPage)} />
