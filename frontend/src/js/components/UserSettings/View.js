//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { DurationSettings } from './DurationSettings';
import { PrivacySettings } from './PrivacySettings';
import { Wrapper } from './Wrapper';

export const View = ({ handleClick, open }) => {
  return (
    <Wrapper handleClick={handleClick} open={open}>
      <DurationSettings />
      <PrivacySettings />
    </Wrapper>
  );
};
