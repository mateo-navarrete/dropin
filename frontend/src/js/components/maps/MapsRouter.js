import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { MusicMapArea } from '.';
// import { MapArea } from '..';

export const MapsRouter = props => {
  // console.log(props);
  return (
    <Switch>
      <Route path="/music" render={withRouter(MusicMapArea)} />
    </Switch>
  );
};

// <Route path="/" render={withRouter(MapArea)} />
