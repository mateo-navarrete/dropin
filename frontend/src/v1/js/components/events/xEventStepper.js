import React, { Component } from "react";
import {
  Button,
  FamilyIcon,
  FamilyIconBorder,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Input,
  InputLabel,
  OutlinedInput,
  PartyIcon,
  PartyIconBorder,
  Radio,
  RadioGroup,
  Select,
  SportsIcon,
  SportsIconBorder,
  Step,
  StepLabel,
  Stepper,
  Switch,
  Typography,
  EventStepperControls
} from "..";
import { withEvents, withEvent, withStyles } from "../../containers";

const styles = theme => ({
  main: {},
  paper: {},
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  root: {
    width: "90%"
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  icon: {
    color: theme.primary //'red !important',
  },
  iconed: {
    color: "rgba(251, 54, 74, 1) !important" //"green !important"
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

const getSteps = () => {
  return ["", "", "", "", "", ""];
};

const getStepContent = (obj, stepIndex) => {
  return obj[stepIndex];
  // return STEPobj[stepIndex];
};

class HorizontalLabelPositionBelowStepper extends Component {
  state = {
    activeStep: 0,
    event_name: "",
    description: "",
    family: true,
    party: false,
    sports: false,
    drop: "family",
    checkedA: true,
    checkedB: true,
    labelWidth: 0
    // display_user: true
  };

  handleChangeCheckbox = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeRadio = event => {
    this.setState({ drop: event.target.value });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const config = {
      category_id: this.props.category_id || 1,
      user_id: this.props.user_id || 1,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      display_user: this.props.display_user || "false",
      event_name: this.state.event_name || "my event",
      description: this.state.description || "default description of my event",
      expiration_date: this.props.expiration_date || "2019-04-09 8:30:29.247613"
    };
    const { classes, hideBottomOverlay } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    const { family, party, sports, drop, labelWidth } = this.state;
    const error = [family, party, sports].filter(v => v).length !== 1;
    // const error = [family, party, sports].filter(v => v).length !== 2;
    const STEPobj = {
      0: (
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Type of Drop</FormLabel>
          <FormGroup>
            <RadioGroup
              aria-label="DropType"
              name="drops"
              className={classes.group}
              row
            >
              <FormControlLabel
                control={
                  <Radio
                    checked={+this.props.category_id === 1}
                    value={1}
                    onChange={e => this.props.setCategory(e.target.value)}
                    color="secondary"
                    name="drops"
                    aria-label="family"
                    icon={<FamilyIconBorder fontSize="large" />}
                    checkedIcon={<FamilyIcon fontSize="large" />}
                  />
                }
                label="FAMILY"
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={+this.props.category_id === 2}
                    value={2}
                    onChange={e => this.props.setCategory(e.target.value)}
                    color="secondary"
                    name="drops"
                    aria-label="party"
                    icon={<PartyIconBorder fontSize="large" />}
                    checkedIcon={<PartyIcon fontSize="large" />}
                  />
                }
                label="PARTY"
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={+this.props.category_id === 3}
                    value={3}
                    onChange={e => this.props.setCategory(e.target.value)}
                    color="secondary"
                    name="drops"
                    aria-label="sports"
                    icon={<SportsIconBorder fontSize="large" />}
                    checkedIcon={<SportsIcon fontSize="large" />}
                  />
                }
                label="SPORTS"
              />
            </RadioGroup>
          </FormGroup>
        </FormControl>
      ),
      1: (
        <form className={classes.form} onChange={this.handleChange}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="event_name">Event Name</InputLabel>
            <Input
              id="event_name"
              name="event_name"
              autoComplete="off"
              value={this.state.event_name}
              autoFocus
              required
            />
          </FormControl>
        </form>
      ),
      2: (
        <form className={classes.form} onChange={this.handleChange}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="description">Event Details</InputLabel>
            <Input
              id="description"
              name="description"
              autoComplete="off"
              value={this.state.description}
              autoFocus
              required
            />
          </FormControl>
        </form>
      ),
      3: <div />,
      4: (
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={!this.props.display_user}
                value={this.props.display_user}
                id="display_user"
                name="display_user"
                onChange={e => {
                  console.log("$", e.target.value);
                  this.props.setPrivacy(e.target.value);
                  // this.setPrivacy()
                }}
              />
            }
            label="Make Public"
          />
        </FormGroup>
      ),
      5: (
        <div>
          <br />
          {`drop type:  ${this.props.category_id}`}
          <br />
          {`event name: ${this.state.event_name}`}
          <br />
          {`drop details: ${this.state.description}`}
          <br />
          {`duration: ${this.props.expiration_date}`}
          <br />
          {`private: ${!this.props.display_user}`}
          <br />
        </div>
      )
    };

    return (
      <>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel
                  StepIconProps={{
                    classes: {
                      active: classes.icon,
                      completed: classes.iconed
                    }
                  }}
                >
                  {label}
                </StepLabel>
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
                <Typography component="h1" variant="h5">
                  Drop Details
                </Typography>

                {activeStep === 3 ? (
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="outlined-duration-native-simple">
                      Drop Duration
                    </InputLabel>
                    <Select
                      native
                      value={this.props.expiration_date}
                      onChange={e => this.props.setExpiration(e.target.value)}
                      input={
                        <OutlinedInput
                          name="Drop Duration"
                          labelWidth={labelWidth}
                          id="outlined-duration-native-simple"
                        />
                      }
                    >
                      <option value="" />
                      <option value={"2019-04-09 8:30:29.247613"}>
                        15 minutes
                      </option>
                      <option value={"2019-04-09 8:45:29.247613"}>
                        30 minutes
                      </option>
                      <option value={"2019-04-09 9:30:29.247613"}>
                        1 hour
                      </option>
                      <option value={"2019-04-09 11:30:29.247613"}>
                        3 hour
                      </option>
                    </Select>
                  </FormControl>
                ) : (
                  ""
                )}

                {getStepContent(STEPobj, activeStep)}
                <EventStepperControls
                  classes={classes}
                  activeStep={activeStep}
                  handleBack={this.handleBack}
                  handleNext={this.handleNext}
                  createEvent={this.props.createEvent}
                  config={{
                    category_id: this.props.category_id, //default 1,
                    user_id: 1, //this.props.user_id,
                    user_name: this.props.user_name, //this.props.user_id,
                    latitude: this.props.latitude,
                    longitude: this.props.longitude,
                    display_user: this.state.display_user,
                    event_name: "test name", //this.props.event_name,
                    description: "test desc", //this.prosps.description,
                    expiration_date: this.props.expiration_date
                  }}
                  s
                />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

// <div>
//   <Button
//     disabled={activeStep === 0}
//     onClick={this.handleBack}
//     className={classes.backButton}
//   >
//     Back
//   </Button>
//   <Button
//     variant="contained"
//     color="primary"
//     onClick={
//       activeStep === steps.length - 1
//         ? () => this.props.createEvent(config)
//         : this.handleNext
//     }
//   >
//     {activeStep === steps.length - 1 ? "DROP PIN" : "Next"}
//   </Button>
// </div>

export const EventStepper = withEvent(
  withStyles(styles)(HorizontalLabelPositionBelowStepper)
);
