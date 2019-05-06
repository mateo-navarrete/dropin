//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { LogIn } from '../../LogIn';
import { SignUp } from '../../SignUp';

export const DefaultMenu = () => {
  return (
    <F>
      <SignUp variant='outlined' />
      <LogIn variant='outlined' />
    </F>
  );
};
