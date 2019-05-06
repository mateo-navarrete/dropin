import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MAP } from 'react-google-maps/lib/constants';
import PropTypes from 'prop-types';

const style = {
  backgroundColor: '#fff',
  border: '2px solid #fff',
  borderRadius: '3px',
  boxShadow: '0 2px 6px rgba(0,0,0,.3)',
  cursor: 'pointer',
  textAlign: 'center',
  marginLeft: 8,
  marginTop: 8,
  paddingLeft: '2px',
  paddingRight: '2px',
};

export const CustomMapControl = (
  { position = window.google.maps.ControlPosition.TOP_LEFT, children },
  context
) => {
  const map = context[MAP];

  const controlDiv = document.createElement('div');

  useEffect(() => {
    const controls = map.controls[position];
    const index = controls.length;
    controls.push(controlDiv);
    return () => {
      controls.removeAt(index);
    };
  });

  return createPortal(<div style={style}>{children}</div>, controlDiv);
};

CustomMapControl.contextTypes = {
  [MAP]: PropTypes.object,
};
