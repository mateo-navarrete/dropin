//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { SignOutButton } from './SignOutButton';

export const SignOut = ({ handleClick, ...props }) => {
  return <SignOutButton handleClick={handleClick} />;
};
