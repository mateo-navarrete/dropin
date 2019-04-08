// import React from 'react';
import { withUserCoords } from '../../containers';

const UserCoord = props => {
  // console.log('@userCoords:', props.userCoords);
  return null;
};

// <>
//     <h1>UserCoords:</h1>
//     <p>latitude: {props.latitude}</p>
//     <p>latitude: {props.longitude}</p>
//   </>

export const UserCoords = withUserCoords(UserCoord);
