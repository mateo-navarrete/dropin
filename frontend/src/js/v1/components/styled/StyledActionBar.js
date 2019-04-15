import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import { withStepperModal } from '../../containers';
import { withBottomOverlay } from '../../containers';

const ContainedButtons = props => {
  const { classes, openBottomOverlay, height, width, marginLeft } = props;
  // console.log('##', props);
  return (
    <div className="styled-actionBar" style={{ height: height, width: width }}>
      <Button
        variant="contained"
        className={classes}
        onClick={() => openBottomOverlay()}
        style={{
          backgroundColor: 'rgba(255,255,255,1)',
          height: height - 10,
          width: width - 10,
          marginTop: '5px',
          marginLeft: marginLeft,
        }}
      >
        <div className="logo-wide" />
      </Button>
    </div>
  );
};
// className={classes.button}

// ContainedButtons.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStepperModal(withStyles(styles)(ContainedButtons));
// export default withStepperModal(ContainedButtons);
export default withBottomOverlay(ContainedButtons);
