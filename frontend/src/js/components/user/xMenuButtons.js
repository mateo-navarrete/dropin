import React, { Fragment as F } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
// import LockOpenIcon from '@material-ui/icons/LockOpen';

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
  // <Card className={classes.card}>
  // <CardActions>
  return (
    <F>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Close
        <ClearIcon className={classes.rightIcon} />
      </Button>
    </F>
  );
}
// </CardActions>
// </Card>

MyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const MenuButtons = withStyles(styles)(MyCard);
