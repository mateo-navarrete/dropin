import React, { Component } from 'react';
// import { withRouter } from 'react-router';
// import { withTopOverlay } from '../../containers';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      // width: 400,
      width: 'calc(100% - 50px)',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: `calc(100vh - ${theme.spacing.unit * 16}px)`,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  root: {
    width: '90%',
  },
});

export default class TopOverlayClass extends Component {
  // console.log('@to', props[props.drop], props.eventId);

  // let pinInfo;
  // if (coords) {
  //   pinInfo = coords.map(pin => {
  //     if (pin.id === eventId)
  //       //event_id
  //       return (
  //         <div className="pin-modal-info" key={pin.id}>
  //           <h1>{pin.event_name}</h1>
  //           <p>Desription: {pin.description}</p>
  //           <p>
  //             Location: {pin.latitude}, {pin.longitude}
  //           </p>
  //         </div>
  //       );
  //   });
  // } else {
  //   return null;
  // }

  // {pinInfo}
  render() {
    let renderEventInfo = this.props.drop
      ? this.props[this.props.drop].map(event => {
          if (event.id === this.props.eventId) {
            return (
              <div className="pin-modal-info" key={event.id}>
                <h1>{event.event_name}</h1>
                <p>Desription: {event.description}</p>
                <p>
                  Location: {event.latitude}, {event.longitude}
                </p>
              </div>
            );
          } else {
            return null;
          }
        })
      : '';
    const { classes, closeTopOverlay } = this.props;

    return (
      <div style={{ position: 'relative' }}>
        <div
          className="top-overlay"
          style={{
            top: this.props.topOverlayVisible ? 0 : -+`${this.props.height}`,
          }}
        >
          <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
              <div className={classes.root}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={closeTopOverlay}
                >
                  RETURN
                </Button>

                {renderEventInfo}
              </div>
            </Paper>
          </main>
        </div>
      </div>
    );
  }
}
export const TopOverlayArea = withStyles(styles)(TopOverlayClass);
// export const TopOverlay = withRouter(TopsOverlay);

// style={{
// left: props.visible ? 0 : -+`${props.width}`,
// top: props.visible ? 0 : -+`${props.height}`,
// opacity: props.visible ? 1 : 0,
// }}
// props.closeStepperModal}
