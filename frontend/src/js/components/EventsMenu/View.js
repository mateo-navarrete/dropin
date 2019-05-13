//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
// import { EventsSearch } from '../EventsSearch';
import { EventsActive } from '../EventsActive';
import { EventsExit } from '../EventsExit';
// import { UserFavorites } from '../UserFavorites';
import { UserHistory } from '../UserHistory';

// TODO: close onClick

export const View = ({ handleClose }) => {
  return (
    <F>
      <EventsActive handleClose={handleClose} />
      <UserHistory handleClose={handleClose} />
      <EventsExit handleClose={handleClose} />
    </F>
  );
};
// TODO:
// <F>
//   <EventsSearch handleClose={handleClose} />
//   <EventsActive handleClose={handleClose} />
//   <UserFavorites handleClose={handleClose} />
//   <UserHistory handleClose={handleClose} />
//   <EventsExit handleClose={handleClose} />
// </F>
