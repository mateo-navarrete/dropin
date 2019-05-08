//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { ActiveFavorites } from './ActiveFavorites';
import { DropTags } from './DropTags';
import { DropCircle } from './DropCircle';
import { FavoriteIcon } from '../material';
import { ParentListItem } from '../utils';

export const View = ({
  handleClose,
  toggleShowChildren,
  showChildren,
  user,
}) => {
  return (
    <ParentListItem
      primaryText="Favorites"
      toggleShowChildren={toggleShowChildren}
      showChildren={showChildren}
      showIcon={<FavoriteIcon />}
    >
      <ActiveFavorites handleClose={handleClose} />
      <DropTags handleClose={handleClose} />
      <DropCircle handleClose={handleClose} />
    </ParentListItem>
  );
};
