import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {
  // LogInView,
  // SignUpView,
  HomeView
} from '../views';
import { withDimensions } from '../../containers';

export const ViewsRouter = () => {
  return (
    <Switch>
      <Route path="/" render={withRouter(withDimensions(HomeView))} />
    </Switch>
  );
};

// <Route path="/login" render={withRouter(withDimensions(LogInView))} />
// <Route path="/new" render={withRouter(withDimensions(SignUpView))} />
