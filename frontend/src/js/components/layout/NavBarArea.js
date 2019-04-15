import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, IconWrapper } from '..';
import { withAreaSizes, withEvents, withStyles } from '../../containers';

const styles = theme => ({
  /* Styles applied to the entire root element. */
  root: {
    // color: 'unselected default color',
    '&$selected': {
      color: 'rgba(251, 54, 74, 1)',
    },
  },
  /* Styles applied to text if different than root */
  selected: {},
});

const NavBarBtns = props => {
  const { category, categories, classes, navBarHeight } = props;
  const renderNavBarBtns = categories.map(c => {
    const { name, id } = c;
    const link = '/' + name;
    return (
      <BottomNavigationAction
        classes={classes}
        key={'category' + id}
        label={name.toLowerCase()}
        value={name}
        icon={<IconWrapper name={name} />}
        component={Link}
        to={link}
      />
    );
  });

  return (
    <BottomNavigation
      showLabels
      value={category}
      style={{ height: navBarHeight }}
    >
      {renderNavBarBtns}
    </BottomNavigation>
  );
};

export const NavBarArea = withAreaSizes(
  withEvents(withStyles(styles)(NavBarBtns))
);
