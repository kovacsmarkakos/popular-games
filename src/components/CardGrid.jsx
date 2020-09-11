import React from 'react';
import Cards from './Cards.jsx'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CardGrid = ({ isLoading, items }) => {
  const classes = useStyles();

  return isLoading ? <h1>Loading...</h1> : (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Cards items={items} />
      </Grid>
    </div>
  )
}

export default CardGrid