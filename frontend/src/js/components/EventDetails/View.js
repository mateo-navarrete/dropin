//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { EventsExit } from '../EventsExit';
// import { deleteEvent } from '../../actions';
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

// import { deleteEvent } from '../actions/eventActions'

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
  id,
},
  toggleShowCoords,
  showCoords,
  handleClose,
  coords,
  ...props,
}) => {
  // console.log(props);
  let u_name = props.user_name;

  // console.log("event details view", props)

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
        <IconButton onClick={() => {
    props.deleteEvent({ id, coords, user_name: u_name });
        handleClose();
}}>
          <DeleteIcon fontSize="small"/>
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

  let street;
  let zip;
  if (address) {
    [street, ...zip] = address.split(',');
    zip = zip.join(',');
  } else {
    street = 'address';
    zip = 'unavailable';
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
