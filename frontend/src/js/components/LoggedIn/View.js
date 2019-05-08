//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { UserProfile } from '../UserProfile';
// import { UserSettings } from '../UserSettings';
import { UserExit } from '../UserExit';
import { Divider } from '../material';

export const View = ({ handleClose }) => {
  return (
    <F>
      <UserProfile />
      <Divider />
      <UserExit handleClose={handleClose} />
      <Divider />
    </F>
  );
};

// <F>
//   <UserProfile />
//   <Divider />
//   <UserSettings />
//   <Divider />
//   <UserExit handleClose={handleClose} />
//   <Divider />
// </F>
