import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { SportsPinsArea, PartyPinsArea, FamilyPinsArea, PinsArea } from '.';

export const PinsRouter = props => {
  return (
    <Switch>
      <Route exact path="/" render={withRouter(FamilyPinsArea)} />
      <Route path="/sports" render={withRouter(SportsPinsArea)} />
      <Route path="/party" render={withRouter(PartyPinsArea)} />
      <Route path="/family" render={withRouter(FamilyPinsArea)} />
    </Switch>
  );
};
