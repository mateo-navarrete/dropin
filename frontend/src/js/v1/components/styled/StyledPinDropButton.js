import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withStepperModal } from '../../containers';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const ContainedButtons = props => {
  const { classes, openStepperModal } = props;
  // console.log('##', props);
  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => openStepperModal()}
      >
        <div className="logo-wide" />
      </Button>
    </div>
  );
};

// ContainedButtons.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStepperModal(withStyles(styles)(ContainedButtons));
