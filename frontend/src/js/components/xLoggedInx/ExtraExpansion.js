import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import {
  // BlockIcon,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
  // ListItemIcon,
  ListItemText,
  // VisibilityOff,
  SettingsIcon,
  // TimerIcon
} from '../material';
import Avatar from '@material-ui/core/Avatar';
import { UserDefaults } from '../user';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});
// defaultExpanded
function DetailedExpansionPanel(props) {
  const { classes } = props;
  // <List>
  // <ListItem button>
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <List button>
          <ListItem>
            <Avatar>
              <SettingsIcon />
            </Avatar>
            <ListItemText>
              <UserDefaults />
            </ListItemText>
          </ListItem>
        </List>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Chip
              label="Barbados"
              className={classes.chip}
              onDelete={() => {}}

            />
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}
// </ListItem>
// </List>


// <div className={classes.column}>
//   <Typography className={classes.heading}>Location</Typography>
// </div>
// <div className={classes.column}>
//   <Typography className={classes.secondaryHeading}>
//     Select trip destination
//   </Typography>
// </div>

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const ExtraExpansion = withStyles(styles)(DetailedExpansionPanel);
