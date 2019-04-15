import React from 'react';
import { withAuthUser, withTheme } from '../../containers';
import { Paper, UserStatus } from '..';
import StyledEventStepper from './xStyledEventStepper';

const UsersEvents = props => {
  const paperStyle = {
    // marginTop: props.theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    padding: `${props.theme.spacing.unit * 2}px ${props.theme.spacing.unit *
      3}px`,
    // padding: `${props.theme.spacing.unit * 2}px ${props.theme.spacing.unit *
    // 3}px ${props.theme.spacing.unit * 3}px`,
  };
  // const style = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   height: props.height - props.theme.spacing.unit * 8,
  //   margin: props.theme.spacing.unit * 3,
  //   padding: props.theme.spacing.unit,
  //   width: props.width - props.theme.spacing.unit * 4,
  // };
  // console.log(sizing);
  // console.log(sizing, props.theme.spacing, ((props.height - props.theme.spacing.unit * 8) * 0.5) >> 0);
  return (
    <div className="flex center">
      <Paper style={paperStyle}>
        {props.isLoggedIn ? (
          <StyledEventStepper hideBottomOverlay={props.hideBottomOverlay} />
        ) : (
          <UserStatus {...props} />
        )}
      </Paper>
    </div>
  );
};
// <Paper className={props.classes} style={style}>

export const UserEvents = withAuthUser(withTheme()(UsersEvents));
