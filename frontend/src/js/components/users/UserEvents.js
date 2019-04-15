import React from 'react';
import { withAuthUser, withTheme } from '../../containers';
import { Button, Paper } from '..';
import StyledEventStepper from './xStyledEventStepper';
import StyledSignIn from './xSigninForm';
import StyledSignUp from './xSignupForm';

const UsersEvents = ({
  bottomOverlay,
  hideBottomOverlay,
  height,
  width,
  classes,
  theme,
  ...props,
}) => {
  console.log('@', props);
  const style = {
    height: height - theme.spacing.unit * 8,
    margin: theme.spacing.unit * 3,
    padding: theme.spacing.unit,
    width: width - theme.spacing.unit * 4,
  };
  return (
    <div className="flex center">
      <Paper className={classes} style={style}>
        <div>isLoggedIn ? signin||signup : eventStepper</div>
        <StyledEventStepper />
        <Button
          variant="outlined"
          color="secondary"
          onClick={hideBottomOverlay}
          style={{ marginTop: height - theme.spacing.unit * 30 }}
        >
          RETURN
        </Button>
      </Paper>
    </div>
  );
};

export const UserEvents = withAuthUser(withTheme()(UsersEvents));
