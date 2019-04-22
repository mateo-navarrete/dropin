import React from 'react';
import { withEvents, withStyles, withTheme } from '../../containers';
import { Button, Paper, IconWrapper, Typography, EventButtons } from '..';

const getTime = str => {
  let d = new Date(str);
  return d.toString();
};

const colors = {
  family: 'red',
  party: 'blue',
  sports: 'green',
};

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('310')]: {
      width: 310,
    },
    [theme.breakpoints.up('370')]: {
      width: 360,
    },
    [theme.breakpoints.up(400 + theme.spacing.unit)]: {
      width: 400,
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

const EventsDetails = ({
  topOverlay,
  category,
  hideTopOverlay,
  height,
  width,
  eventID,
  classes,
  theme,
  getAddress,
  ...props,
}) => {
  // console.log(props, category);
  const events = props[category + 'Events'];
  const renderEventDetails =
    topOverlay &&
    events.map(e => {
      // console.log(e);
      return (
        e.id === +eventID && (
          <div className="" key={e.id}>
            <div className={colors[category] + '-bg event-card'}>
              <IconWrapper
                name={category}
                style={{ color: 'rgba(0,0,0,0.5)' }}
              />
            </div>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h5">
                {e.event_name.toUpperCase()}
              </Typography>
              <br />
              <EventButtons {...props}/>
              <br />

              <Typography variant="subtitle1" gutterBottom>
                {getTime(e.created_date).slice(0, 24)}
                <br />
                {e.description}
                <br />
                {e.latitude}, {e.longitude}
                <br />
                {getAddress(e.latitude, e.longitude)}
                {props.address}
              </Typography>
              <div className="flex center">
                <div className="divider-line" style={{ width: width * 0.4 }} />
              </div>
              <br />
              <Button variant="outlined" onClick={hideTopOverlay}>
                CANCEL
              </Button>
            </Paper>
          </div>
        )
      );
    });
  // const style = {
  //   height: height - theme.spacing.unit * 8,
  //   margin: theme.spacing.unit * 3,
  //   padding: theme.spacing.unit,
  //   width: width - theme.spacing.unit * 4,
  // };
  return (
    <div className="centered">
      <main className={classes.main}>{renderEventDetails}</main>
    </div>
  );
};

// <div className="flex center">
//   <Paper className={classes.paper} style={style}>

// <Button
//   variant="outlined"
//   color="secondary"
//   onClick={hideTopOverlay}
//   style={{ marginTop: height - theme.spacing.unit * 30 }}
// >
//   RETURN
// </Button>

export const EventDetails = withEvents(
  withStyles(styles)(withTheme()(EventsDetails))
);
