import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { EventsPage, SigninPage } from '.';

export const SwitchRouter = props => {
  return (
    <Switch>
      <Route path="/events" render={withRouter(EventsPage)} />
      <Route path="/signin" render={withRouter(SigninPage)} />
      <Route
        path="/"
        render={props => (
          <div className="content">
            <h1 className="lato">d r o p i n</h1>
          </div>
        )}
      />
    </Switch>
  );
};
