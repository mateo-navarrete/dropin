import React from 'react';
import { withAuthUser, withStyles, withTheme } from '../../containers';
import { Paper, UserStatus } from '..';
import StyledEventStepper from './xStyledEventStepper';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
    // padding: 'auto',
  },
  // avatar: {
  //   margin: theme.spacing.unit,
  //   backgroundColor: theme.palette.secondary.main,
  // },
  // form: {
  //   width: '100%', // Fix IE 11 issue.
  //   marginTop: theme.spacing.unit,
  // },
  // submit: {
  //   marginTop: theme.spacing.unit * 3,
  // },
});

const UsersEvents = props => {
  // console.log(
  //   '#',
  //   props.theme.breakpoints.up(400 + props.theme.spacing.unit * 3 * 2)
  // );
  // const mainStyle = {
  //   width: 'auto',
  //   display: 'block', // Fix IE 11 issue.
  //   marginLeft: props.theme.spacing.unit * 3,
  //   marginRight: props.theme.spacing.unit * 3,
  //   [props.theme.breakpoints.up(400 + props.theme.spacing.unit * 3 * 2)]: {
  //     // width: 400,
  //     marginLeft: 'auto',
  //     marginRight: 'auto',
  //   },
  // };
  // const paperStyle = {
  //   // marginTop: props.theme.spacing.unit * 8,
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   marginTop: props.theme.spacing.unit,
  //   padding: `${props.theme.spacing.unit * 2}px ${props.theme.spacing.unit *
  //     3}px`,
  //   height: props.height - props.theme.spacing.unit * 2,
  //   // padding: `${props.theme.spacing.unit * 2}px ${props.theme.spacing.unit *
  //   // 3}px ${props.theme.spacing.unit * 3}px`,
  // };
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
  const paperStyle = {
    // height: (props.height * 0.5) >> 0,
    // marginTop: (props.height * 0.25) >> 0,
    justifyContent: 'center',
  };
  return (
    <main className={props.classes.main} style={paperStyle}>
      <Paper className={props.classes.paper} style={paperStyle}>
        {props.isLoggedIn ? (
          <StyledEventStepper hideBottomOverlay={props.hideBottomOverlay} />
        ) : (
          <UserStatus {...props} />
        )}
      </Paper>
    </main>
  );
};
// <div className="flex center">
//   <main className={classes.main}>
// <Paper className={props.classes} style={style}>

export const UserEvents = withAuthUser(
  withTheme()(withStyles(styles)(UsersEvents))
);
// export const UserEvents = withAuthUser(withTheme()(UsersEvents));
