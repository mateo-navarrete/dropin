import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, IconWrapper } from '..';
import {
  withAreaSizes,
  withEvents,
  withStyles,
  withTheme
} from '../../containers';

const styles = theme => ({
  /* Styles applied to the entire root element. */
  root: {
    //   //   // color: 'unselected default color',
    // color: 'rgba(251, 54, 74, 1)',
    // '&$selected': {
    //   color: 'rgba(33, 33, 33, 1)',
    // },
  },

  // select: {
  //   '&:before': {
  //     color: 'rgba(251, 54, 74, 1)',
  //   },
  //   '&:after': {
  //     color: 'rgba(251, 54, 74, 1)',
  //   },
  // },
  // wrapper: {
  //   '&$selected': {
  //     color: 'rgba(251, 54, 74, 1)',
  //   },
  // },
  // root,selected,iconOnly,wrapper,label
  /* Styles applied to text if different than root */
  // selected: {
  //   color: 'rgba(251, 54, 74, 1)',
  //   backgroundColor: 'rgba(251, 54, 74, 1)',
  // },
});

const colors = {
  family: 'red',
  party: 'blue',
  sports: 'green',
};

const NavBarBtns = props => {
  const { category, categories, classes, navBarHeight } = props;
  const renderNavBarBtns = categories.map(c => {
    const { name, id } = c;
    const link = '/' + name;
    return (
      <BottomNavigationAction
        key={'category' + id}
        label={name.toLowerCase()}
        value={name}
        icon={<IconWrapper name={name} />}
        component={Link}
        to={link}
        classes={{
          root: classes.root,
          selected:
            //   color:
            colors[name] + '-color',
        }}
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

// style={{
//   ...styles.root,
// ...(name === 'family'
//   ? {
//       color: 'rgba(251, 54, 74, 1)',
//     }
//   : name === 'party'
//   ? {
//       color: 'rgba(41, 128, 185, 1)',
//     }
//   : {
//       color: 'rgba(39, 174, 96, 1)',
//     }),

// }}

export const NavBarArea = withAreaSizes(
  withEvents(withStyles(styles)(withTheme()(NavBarBtns)))
);
