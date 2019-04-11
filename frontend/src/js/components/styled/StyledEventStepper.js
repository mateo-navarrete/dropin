import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withEvent } from '../../containers';

const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

const STEPobj = {
  0: (
    <div>
      drop_category <br />[ CANCEL ] [ NEXT ]
      <select>
        <option>Family</option>
        <option>Party</option>
        <option>Sports</option>
      </select>
    </div>
  ),
  1: (
    <div>
      event_name <br />[ BACK ] [ NEXT ]
      <form>
        <input type="text" placeholder="event_name" />
      </form>
    </div>
  ),
  2: (
    <div>
      description <br />[ BACK ] [ NEXT ]
      <form>
        <input type="text" placeholder="description" />
      </form>
    </div>
  ),
  3: (
    <div>
      expiration_date, expires in... <br />[ BACK ] [ NEXT ]
      <select>
        <option>15 minutes</option>
        <option>30 minutes</option>
        <option>1 hour</option>
        <option>3 hour</option>
      </select>
    </div>
  ),
  4: (
    <div>
      display_user <br />[ BACK ] [ NEXT ]
      <select>
        <option>NO</option>
        <option>YES</option>
      </select>
    </div>
  ),
  5: (
    <div>
      review event & drop_pin <br />[ BACK ] [ FINISH ]
    </div>
  ),
};

function getSteps() {
  return ['', '', '', '', '', ''];
}

function getStepContent(stepIndex) {
  return STEPobj[stepIndex];
}

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    console.log('@ses', this.props);
    const config = {
      category_id: 1,
      user_id: 1,
      latitude: this.props.latitude, //40.743,
      longitude: this.props.longitude, //-73.s935,
      display_user: true,
      event_name: 'this is original an unique and cool',
      description: 'cool desc here oh yeah',
      expiration_date: '2019-04-09 10:27:29.247613',
    };
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              {getStepContent(activeStep)}
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={
                    activeStep === steps.length - 1
                      ? () => this.props.createEvent(config)
                      : this.handleNext
                  }
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// <Typography className={classes.instructions}>
//   {getStepContent(activeStep)}
// </Typography>

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object,
};

export default withEvent(
  withStyles(styles)(HorizontalLabelPositionBelowStepper)
);