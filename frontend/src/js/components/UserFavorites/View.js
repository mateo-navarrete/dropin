//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ActiveFavorites } from './ActiveFavorites';
import { DropTags } from './DropTags';
import { DropCircle } from './DropCircle';
import { Wrapper } from './Wrapper';

export const View = ({ handleClick, open, user }) => {
  return (
    <Wrapper handleClick={handleClick} open={open}>
      <ActiveFavorites />
      <DropTags />
      <DropCircle />
    </Wrapper>
  );
};
