//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { IconButton, MenuIcon } from '../material';
import { withStyles } from '../../containers';

const styles = {
  menuButton: {
    // marginLeft: -12,
    // marginRight: 20,
  },
};

const SettingsButton = props => {
  return (
    <IconButton
      className={props.classes.menuButton}
      color="inherit"
      aria-label="Menu"
    >
      <MenuIcon />
    </IconButton>
  );
};

export const ToggleSettingsButton = withStyles(styles)(SettingsButton);
