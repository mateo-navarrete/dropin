import React from 'react';
import { withAuthUser, withTheme } from '../../containers';
import { Paper } from '..';
import StyledEventStepper from './xStyledEventStepper';
import { UserStatus } from './UserStatus';

const UsersEvents = props => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: props.height - props.theme.spacing.unit * 8,
    margin: props.theme.spacing.unit * 3,
    padding: props.theme.spacing.unit,
    width: props.width - props.theme.spacing.unit * 4,
  };
  return (
    <div className="flex center">
      <Paper className={props.classes} style={style}>
        {props.isLoggedIn ? (
          <StyledEventStepper hideBottomOverlay={props.hideBottomOverlay} />
        ) : (
          <UserStatus {...props} />
        )}
      </Paper>
    </div>
  );
};

export const UserEvents = withAuthUser(withTheme()(UsersEvents));
