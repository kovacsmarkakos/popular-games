import React from 'react';
import Cards from './Cards.jsx'
import { makeStyles, Grid, CircularProgress } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const CardGrid = ({ isLoading, items, muted, setMuted }) => {
  const classes = useStyles();

  return isLoading ? <CircularProgress /> : (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Cards items={items} muted={muted} setMuted={setMuted} />
      </Grid>
    </div>
  )
}

export default CardGrid