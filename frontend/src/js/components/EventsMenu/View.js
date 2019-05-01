//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Wrapper } from './Wrapper';
import { EventsSearch } from '../EventsSearch';
import { EventsActive } from '../EventsActive';
import { EventsExit } from '../EventsExit';
import { UserFavorites } from '../UserFavorites';
import { UserHistory } from '../UserHistory';

export const View = ({ handleClose }) => {
  return (
    <Wrapper handleClose={handleClose}>
      <EventsSearch />
      <EventsActive />
      <UserFavorites />
      <UserHistory />
      <EventsExit handleClose={handleClose} />
    </Wrapper>
  );
};
