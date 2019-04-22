import React from 'react';
import { Button, UserLogout } from '..';
import { withAreaSizes, withOverlay, withStyles } from '../../containers';

const styles = theme => ({
  // button: {
  root: {
    margin: '5px',
    padding: '3px 30px',
    backgroundColor: 'white',
  },
});

const ActionBar = ({ actionBarHeight, classes, showBottomOverlay }) => {
  return (
    <div style={{ height: actionBarHeight }} className="flex space-around">
      <Button variant="contained" classes={classes} onClick={showBottomOverlay}>
        <img
          src={require('../../../assets/dropin-logo-wide.png')}
          alt="dropin"
          height={actionBarHeight - 20}
          width={actionBarHeight * 2 - 40}
        />
      </Button>
      <UserLogout isLogoutBtn classes={classes} height={actionBarHeight - 20} />
    </div>
  );
};
// onClick={() => openStepperModal()}

export const ActionBarArea = withAreaSizes(
  withOverlay(withStyles(styles)(ActionBar))
);
