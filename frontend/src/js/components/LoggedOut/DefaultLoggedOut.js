//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { SignIn } from '../auth/SignIn';
import { SignUp } from '../auth/SignUp';

export const DefaultLoggedOut = props => {
  return (
    <F>
      <SignUp isButtonOutlined={true} {...props}/>
      <SignIn isButtonOutlined={true} {...props}/>
    </F>
  );
};
