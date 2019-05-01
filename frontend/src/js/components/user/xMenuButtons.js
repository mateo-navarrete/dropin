import React, { Fragment as F } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../containers';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

const styles = theme => ({
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
  button: {
    margin: '40px 20px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

function MyCard(props) {
  const { classes } = props;
  return (
    <F>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Close
        <ClearIcon className={classes.rightIcon} />
      </Button>
    </F>
  );
}

MyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const MenuButtons = withStyles(styles)(MyCard);
