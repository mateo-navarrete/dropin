//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { TrendingEvents } from './TrendingEvents';
import { JustDroppedEvents } from './JustDroppedEvents';
import { FomoEvents } from './FomoEvents';
import { Wrapper } from './Wrapper';

export const View = ({ handleClick, open }) => {
  return (
    <Wrapper handleClick={handleClick} open={open}>
      <TrendingEvents />
      <JustDroppedEvents />
      <FomoEvents />
    </Wrapper>
  );
};
