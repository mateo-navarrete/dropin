import React, { Fragment as F } from 'react';
import { AgeVerification } from './AgeVerification';
import { Form } from './Form';

export const View = ({ ageVerified, hideAgeVerification, handleClose }) => {
  const renderView = ageVerified ? (
    <Form handleClose={handleClose} />
  ) : (
    <AgeVerification hideAgeVerification={hideAgeVerification} />
  );
  return <F>{renderView}</F>;
};
