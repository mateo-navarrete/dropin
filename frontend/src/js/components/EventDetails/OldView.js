import React, { Component } from 'react';
import moment from 'moment';
import PinIcon from '@material-ui/icons/LocationOn';
import Paper from '@material-ui/core/Paper';

// import { withEvents, withStyles, withTheme } from '../../containers';
import { withStyles, withTheme } from '../../containers';
import {
  Button,
  // Paper,
  // IconWrapper,
  Typography
  // EventButtons,
  // PinIcon
} from '../material';

const barColor = {
  family: 'red-bg',
  party: 'blue-bg',
  sports: 'green-bg',
};

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

// const WrappedComponent = ({
//   topOverlay,
//   category,
//   hideTopOverlay,
//   height,
//   width,
//   eventID,
//   classes,
//   theme,
//   getAddress,
//   ...props
// }) => {
class WrappedComponent extends Component {
  state = {
    visible: false,
  };
  handleClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  splitAddress = str => {
    //
  };

  render() {
    const {
      topOverlay,
      category,
      hideTopOverlay,
      height,
      width,
      eventID,
      classes,
      theme,
      getAddress,
    } = this.props;
    console.log(this.props);
    const events = this.props[category + 'Events'];
    const renderEventDetails =
      topOverlay &&
      events.map(e => {
        let now;
        let start;
        let end;
        let total;
        let remaining;
        let percent;
        let maxWidth = width <= 310 ? 310 : width <= 370 ? 360 : 400;
        let localtime;
        let street;
        let address;
        let endtime;
        if (e.id === +eventID) {
          now = moment();
          start = moment(e.created_date);
          end = moment(e.expiration_date);
          let duration = moment.duration(end.diff(start));
          total = duration.asMinutes();
          let expired = moment.duration(now.diff(start));
          remaining = expired.asMinutes();
          percent = (((remaining / total) * 10000) >>> 0) / 10000;
          if (percent <= 0) percent = 0;
          if (percent >= 1) percent = 1;
          let percentComplete = (((remaining / total) * 10000) >>> 0) / 100;
          //NOTE: percentComplete / 100 %
          // console.log(
          //   total,
          //   remaining,
          //   remaining / total,
          //   percentComplete,
          //   percent
          // );
          // console.log('@', theme, width, maxWidth, category, barColor[category]);
          localtime = moment(start).format('dddd, MMMM Do YYYY, h:mm:ss a');
          endtime = moment(end).format('dddd, MMMM Do YYYY, h:mm:ss a');
          let [first, ...rest] = this.props.address.split(',');
          rest = rest.join(',');
          // console.log(first);
          // console.log(rest);
          // console.log(e, e.display_user);
          //   percent,
          //   (maxWidth - theme.spacing.unit * 8) * percent
          street = first;
          address = rest;
          // street = this.props.address; //copy.match(/([^,]+)/);
          // console.log(street.length);
        }

        // <IconWrapper
        //   name={category}
        //   style={{ color: 'rgba(0,0,0,0.5)' }}
        // />

        return (
          e.id === +eventID && (
            <div className="" key={e.id}>
              <div className={colors[category] + '-bg event-card'}>
                <div name={category} style={{ color: 'rgba(0,0,0,0.5)' }} />
              </div>
              <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                  {e.event_name.toUpperCase()}
                </Typography>
                {e.display_user === 'true' ? (
                  <Typography variant="caption" gutterBottom>
                    by {e.user_name}
                  </Typography>
                ) : (
                  ''
                )}
                <Typography variant="caption" gutterBottom>
                  dropped: {localtime}
                </Typography>
                <div
                  className={'progress-bg ' + barColor[category]}
                  style={{ width: maxWidth - theme.spacing.unit * 8 }}
                >
                  <div
                    className={'progress-bar'}
                    style={{
                      width: (maxWidth - theme.spacing.unit * 8) * percent,
                    }}
                  />
                </div>
                <Typography variant="caption" gutterBottom>
                  expires: {endtime}
                </Typography>
                <br />
                <div>EventButtons '...this.props' </div>
                <br />
                <Typography variant="subtitle1" gutterBottom>
                  {e.description}
                  <br />
                  <div className="flex space-around align">
                    <Button variant="outlined" onClick={this.handleClick}>
                      <PinIcon />
                    </Button>
                    {this.state.visible ? (
                      <div>
                        {e.latitude}, {e.longitude}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  {getAddress(e.latitude, e.longitude)}
                  {street}
                  <br />
                  {address}
                </Typography>
                <div className="flex center">
                  <div
                    className="divider-line"
                    style={{ width: maxWidth * 0.5 }}
                  />
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
    // <EventButtons {...this.props} />

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
  }
}

// {getTime(e.created_date).slice(0, 24)}
// <br />

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

export const OldView = withStyles(styles)(withTheme()(WrappedComponent));
// export const OldView = withEvents(
// withStyles(styles)(withTheme()(WrappedComponent))
// );
