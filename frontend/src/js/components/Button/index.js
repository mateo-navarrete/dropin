//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { Icons } from './Icons';
import { Styles } from './Styles';
import { Button as B } from '../material';
import { withStyles } from '../../containers';

//["text","outlined","contained"]
const ComponentBase = ({
  buttonType,
  buttonStyle,
  classes,
  handleClick,
  label,
  isRightIcon,
  isLeftIcon,
  ...props,
}) => {
  console.log(classes, classes[buttonStyle]);
  return (
    <B
      variant={buttonType}
      fullWidth
      className={classes[buttonStyle]}
      onClick={handleClick}
    >
      {label || 'Button Test'}
      {isRightIcon && (
        <Icon
          icon="SignUpIcon"
          fontSize="small"
          className={classes[isRightIcon]}
        />
      )}
    </B>
  );
};

// {isLeftIcon && (
//   <LogInIcon fontSize="small" className={classes.rightIcon} />
// )}

const Icon = props => {
  const HOC = props => <F {...props} />;
  const WrappedComponent = Icons[props.icon];
  return (
    <HOC>
      <WrappedComponent {...props} />
    </HOC>
  );
};

export const Btn = props => {
  const WrappedComponent = props => <ComponentBase {...props} />;
  const HOC = withStyles(Styles[props.buttonStyle])(WrappedComponent);
  return <HOC {...props} />;
};
