import React from 'react';
import { DropBtn } from '.';
import { withDrops } from '../../containers';

const DropBtnsList = ({ drops, ...props }) => {
  // console.log(drops, props);
  const renderDropBtns =
    drops && drops.length
      ? drops.map((drop, i) => {
          const { id, icon, type } = drop;
          return (
            <DropBtn
              key={'dropBtn' + i}
              id={id}
              icon={icon}
              type={type}
              onChange={props.onChange}
              value={i}
            />
          );
        })
      : '';
  return renderDropBtns;
};

export const DropBtnList = withDrops(DropBtnsList);
