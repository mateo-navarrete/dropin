import React, { Component } from 'react';
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

const getSteps = () => {
  return ['', '', '', '', '', ''];
};

const getStepContent = (obj, stepIndex) => {
  return obj[stepIndex];
  // return STEPobj[stepIndex];
};

class HorizontalLabelPositionBelowStepper extends Component {
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
    const STEPobj = {
      0: (
        <div>
          drop_category <br />[ CANCEL ] [ NEXT ]
          <select onChange={e => this.props.setCategory(e.target.value)}>
            <option value={1}>Family</option>
            <option value={2}>Party</option>
            <option value={3}>Sports</option>
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
          <select onChange={e => this.props.setExpiration(e.target.value)}>
            <option value={'2019-04-09 8:30:29.247613'}>15 minutes</option>
            <option value={'2019-04-09 8:45:29.247613'}>30 minutes</option>
            <option value={'2019-04-09 9:30:29.247613'}>1 hour</option>
            <option value={'2019-04-09 11:30:29.247613'}>3 hour</option>
          </select>
        </div>
      ),
      4: (
        <div>
          display_user <br />[ BACK ] [ NEXT ]
          <select onChange={e => this.props.setPrivacy(e.target.value)}>
            <option value={false}>NO</option>
            <option value={true}>YES</option>
          </select>
        </div>
      ),
      5: (
        <div>
          review event & drop_pin <br />[ BACK ] [ FINISH ]
        </div>
      ),
    };
    console.log('@styled With event', this.props);

    const config = {
      category_id: this.props.category_id, //default 1,
      user_id: 1, //this.props.user_id,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      display_user: this.props.display_user,
      event_name: 'test name', //this.props.event_name,
      description: 'test desc', //this.prosps.description,
      expiration_date: this.props.expiration_date,
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
              {getStepContent(STEPobj, activeStep)}
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
