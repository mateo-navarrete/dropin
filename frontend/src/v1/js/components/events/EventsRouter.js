import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { PartyEvents, SportsEvents, FamilyEvents } from '..';

export const EventsRouter = () => {
  return (
    <Switch>
      <Route path="/party" render={withRouter(PartyEvents)} />
      <Route path="/sports" render={withRouter(SportsEvents)} />
      <Route path="/" render={withRouter(FamilyEvents)} />
    </Switch>
  );
};
