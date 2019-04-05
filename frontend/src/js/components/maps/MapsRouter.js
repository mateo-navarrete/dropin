import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { FoodMapArea, MusicMapArea } from '.';

export const MapsRouter = props => {
  return (
    <Switch>
      <Route path="/music" render={withRouter(MusicMapArea)} />
      <Route path="/food" render={withRouter(FoodMapArea)} />
    </Switch>
  );
};
