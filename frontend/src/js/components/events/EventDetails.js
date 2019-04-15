import React from 'react';
import { withEvents, withTheme } from '../../containers';
import { Button, Paper } from '..';

const EventsDetails = ({
  topOverlay,
  category,
  hideTopOverlay,
  height,
  width,
  eventID,
  classes,
  theme,
  ...props,
}) => {
  // console.log(theme);

  const events = props[category + 'Events'];
  const renderEventDetails =
    topOverlay &&
    events.map(e => {
      return (
        e.id === +eventID && (
          <div className="" key={e.id}>
            <h1>{e.event_name}</h1>
            <p>Description: {e.description}</p>
            <p>
              Location: {e.latitude}, {e.longitude}
            </p>
          </div>
        )
      );
    });
  const style = {
    height: height - theme.spacing.unit * 8,
    margin: theme.spacing.unit * 3,
    padding: theme.spacing.unit,
    width: width - theme.spacing.unit * 4,
  };
  return (
    <div className="flex center">
      <Paper className={classes} style={style}>
        {renderEventDetails}
        <Button
          variant="outlined"
          color="secondary"
          onClick={hideTopOverlay}
          style={{ marginTop: height - theme.spacing.unit * 30 }}
        >
          RETURN
        </Button>
      </Paper>
    </div>
  );
};

export const EventDetails = withEvents(withTheme()(EventsDetails));
