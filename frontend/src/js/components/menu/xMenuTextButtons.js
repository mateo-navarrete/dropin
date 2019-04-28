//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { Button } from '../material';

const Wrapper = props => {
  return (
    <F>
      <Button color="inherit">SignUp</Button>
      <Button color="inherit">LogIn</Button>
    </F>
  );
};

export const MenuTextButtons = Wrapper;
