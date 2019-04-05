import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { FoodPinsArea, MusicPinsArea } from '.';

export const PinsRouter = props => {
  return (
    <Switch>
      <Route path="/music" render={withRouter(MusicPinsArea)} />
      <Route path="/food" render={withRouter(FoodPinsArea)} />
    </Switch>
  );
};
