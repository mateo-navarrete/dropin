//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { EventsExit } from '../EventsExit';
import {
  Button,
  // Paper,
  // IconWrapper,
  Divider,
  Typography,
  // FavoriteIcon,
  IconButton,
  ReportIcon,
  // EditIcon,
  DeleteIcon,
  PinIcon
  // EventButtons,
} from '../material';
import { ProgressBar } from '../ProgressBar';
import { getTimeAgo } from '../../utils';

export const View = ({
  name,
  event: {
    address,
    caption,
    event_name,
    latitude,
    longitude,
    position,
    user_name,
    display_user,
    created_date,
    expiration_date,
  },
  toggleShowCoords,
  showCoords,
  handleClose,
  ...props,
}) => {
  console.log("event details view", address)
  let timeAgo = getTimeAgo(created_date);
  // const favoriteStatus = (
  //   <IconButton>
  //     <FavoriteIcon fontSize="small" />
  //   </IconButton>
  // );
  // console.log(user_name, display_user);
  const renderOptions =
    user_name === name ? (
      <div className="flex align">
        <IconButton>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    ) : (
      <IconButton>
        <ReportIcon fontSize="small" />
      </IconButton>
    );
  const renderCreater =
    display_user === 'true' ? (
      <Typography variant="caption" gutterBottom>
        by {user_name}
      </Typography>
    ) : (
      ''
    );
  const renderCoords = showCoords ? (
    <div>
      {latitude}, {longitude}
    </div>
  ) : (
    ''
  );

  let street = 'address';
  let zip = 'unavailable';
  if (address) {
    let [street, ...zip] = address.split(',');
    zip = zip.join(',');
  }

  return (
    <F>
      <div className="flex space-between align">
        <F>
          <Typography component="h1" variant="h5">
            {event_name.toUpperCase()}
          </Typography>
        </F>
        <F>{renderOptions}</F>
      </div>
      <Divider />
      <Typography variant="caption" gutterBottom>
        <div className="flex space-between align">
          <F>dropped {timeAgo} </F>
          <F>{renderCreater}</F>
        </div>
        <ProgressBar start={created_date} end={expiration_date} />
      </Typography>
      <Typography variant="subtitle1" gutterBottom className="text-left">
        {caption}
      </Typography>
      <Divider />
      <br />
      <div className="flex space-between align">
        <Button variant="outlined" onClick={toggleShowCoords}>
          <PinIcon />
        </Button>
        {renderCoords}
      </div>
      <br />
      <div className="text-left">
        <div>{street}</div>
        <div>{zip}</div>
      </div>
      <br />
      <Divider />
      <br />
      <EventsExit handleClose={handleClose} />
    </F>
  );
};

// {getAddress(e.latitude, e.longitude)}
// {street}
// <br />
// {address}
