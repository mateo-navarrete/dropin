//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';

export const DefaultLoggedOut = props => {
  return (
    <F>
      <SignUp isButtonOutlined={true} {...props}/>
      <SignIn isButtonOutlined={true} {...props}/>
    </F>
  );
};
