//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ActiveEvents } from './ActiveEvents';
import { ArchivedEvents } from './ArchivedEvents';
import { Wrapper } from './Wrapper';

export const View = ({ handleClick, open }) => {
  return (
    <Wrapper handleClick={handleClick} open={open}>
      <ActiveEvents />
      <ArchivedEvents />
    </Wrapper>
  );
};
