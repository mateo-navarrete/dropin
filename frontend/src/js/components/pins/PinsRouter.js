import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { FoodPinsArea, MusicPinsArea, SportsPinsArea, ReligiousPinsArea, GamingPinsArea, EducationPinsArea, EntertainmentPinsArea, HumanitarianPinsArea, PartyPinsArea, FamilyPinsArea} from '.';

export const PinsRouter = props => {
  return (
    <Switch>
      <Route path="/music" render={withRouter(MusicPinsArea)} />
      <Route path="/food" render={withRouter(FoodPinsArea)} />
      <Route path="/sports" render={withRouter(SportsPinsArea)} />
      <Route path="/religious" render={withRouter(ReligiousPinsArea)} />
      <Route path="/gaming" render={withRouter(GamingPinsArea)} />
      <Route path="/education" render={withRouter(EducationPinsArea)} />
      <Route path="/entertainment" render={withRouter(EntertainmentPinsArea)} />
      <Route path="/humanitarian" render={withRouter(HumanitarianPinsArea)} />
      <Route path="/party" render={withRouter(PartyPinsArea)} />
      <Route path="/family" render={withRouter(FamilyPinsArea)} />
    </Switch>
  );
};
