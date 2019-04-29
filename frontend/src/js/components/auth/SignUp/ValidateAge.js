//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { SignUpView } from './SignUpView';
import { UserMustBe18 } from './UserMustBe18';

export const ValidateAge = ({ is18, closeModal, hideMustBe18, ...props }) => {
  const verifyAge = is18 ? (
    <SignUpView closeModal={closeModal} {...props} />
  ) : (
    <UserMustBe18 hideMustBe18={hideMustBe18} {...props} />
  );
  return <F>{verifyAge}</F>;
};
