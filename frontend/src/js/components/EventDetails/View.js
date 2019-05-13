//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import moment from 'moment';
import { EventsExit } from '../EventsExit';
import {
  Button,
  // Paper,
  // IconWrapper,
  Divider,
  Typography,
  FavoriteIcon,
  IconButton,
  ReportIcon,
  EditIcon,
  DeleteIcon,
  PinIcon
  // EventButtons,
} from '../material';

export const View = ({
  address,
  name,
  position,
  user_name,
  display_user,
  created_date,
  getAddress,
  latitude,
  longitude,
  ...props,
}) => {
  console.log("event details triggered", props)
  // let eventCoords = {latitude: position.lat, longitude: position.lng}
  let timeAgo = moment(created_date).fromNow();
  // console.log(props, timeAgo);
  const favoriteStatus = (
    <IconButton>
      <FavoriteIcon fontSize="small" />
    </IconButton>
  );
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
  return (
    <F>
      {renderOptions}
      <div className="flex center align">
        <F>
          <Typography component="h1" variant="h5">
            {props.event.event_name.toUpperCase()}
          </Typography>
        </F>
      </div>
      <div className="flex center align">
        <F>{renderCreater}</F>
      </div>
      <Typography variant="caption" gutterBottom>
        <div className="flex space-around align">
          <F>dropped {timeAgo} </F>
          <F>
            <div>durationBar</div>
          </F>
        </div>
      </Typography>
      <Divider />
      <br />
      <Typography variant="subtitle1" gutterBottom>
        Caption: {props.event.caption}
      </Typography>
      <Divider />

      <div className="flex center align">
        <F>
          <IconButton>
            <PinIcon fontSize="small" />
          </IconButton>
        </F>
        <F>{'lat: ' + props.event.latitude + ' lng: ' + props.event.longitude}</F>
      </div>
      <div>Address: {address}</div>
      <br />
      <Divider />
      <br />

      <EventsExit handleClose={props.handleClose} />
    </F>
  );
};

// <div className="flex space-around align">
//   <Button variant="outlined" onClick={this.handleClick}>
//     <PinIcon />
//   </Button>
//   {this.state.visible ? (
//     <div>
//       {props.latitude}, {props.longitude}
//     </div>
//   ) : (
//     ''
//   )}
// </div>
// {getAddress(e.latitude, e.longitude)}
// {street}
// <br />
// {address}

// <div className="flex center">
//   <div className="divider-line" style={{ width: maxWidth * 0.5 }} />
// </div>
