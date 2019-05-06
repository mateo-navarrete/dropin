import React, { Fragment as F } from 'react';
import { AgeVerification } from './AgeVerification';
import { SignUpForm } from './SignUpForm';

export const View = ({ ageVerified, hideAgeVerification, handleClose }) => {
  const renderView = ageVerified ? (
    <SignUpForm handleClose={handleClose} />
  ) : (
    <AgeVerification
      hideAgeVerification={hideAgeVerification}
      handleClose={handleClose}
    />
  );
  return <F>{renderView}</F>;
};
