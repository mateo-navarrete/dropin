import React from 'react';
import { withScreenSize } from '../../containers';
import '../../../styles/areaWrapper.css';

const WrapArea = ({ mL, marginLeft, wrapperH, wrapperW, ...props }) => {
  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      height: props[wrapperH],
      width: props[wrapperW],
    });
  });

  return (
    <div
      className="flex wrap area-wrapper"
      style={{
        height: props[wrapperH],
        marginLeft: mL ? marginLeft : 0,
        width: props[wrapperW],
      }}
    >
      {children}
    </div>
  );
};

export const AreaWrapper = withScreenSize(WrapArea);
// {props.children}

// {React.cloneElement(props.children, {
//   height: props[wrapperH],
//   width: props[wrapperW]
// })}
