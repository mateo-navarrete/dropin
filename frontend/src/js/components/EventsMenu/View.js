//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { EventsSearch } from '../EventsSearch';
import { EventsActive } from '../EventsActive';
import { EventsExit } from '../EventsExit';
import { UserFavorites } from '../UserFavorites';
import { UserHistory } from '../UserHistory';

// TODO: close onClick

export const View = ({ handleClose }) => {
  return (
    <F>
      <EventsSearch />
      <EventsActive />
      <UserFavorites />
      <UserHistory />
      <EventsExit handleClose={handleClose} />
    </F>
  );
};
