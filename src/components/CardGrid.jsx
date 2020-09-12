import React from 'react';
import Cards from './Cards.jsx'
import { makeStyles, Grid, CircularProgress } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
}))

const CardGrid = ({ isLoading, items }) => {
  const classes = useStyles();

  return isLoading ? <CircularProgress /> : (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Cards items={items} />
      </Grid>
    </div>
  )
}

export default CardGrid