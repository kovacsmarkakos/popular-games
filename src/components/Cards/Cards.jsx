import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'

const Cards = ({ items, isLoading }) => {

  return isLoading ? <h1>Loading...</h1> :
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {items.map(item => (
          <Grid item component={Card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>{item.name}</Typography>
              <Typography variant="h5">{item.metacritic}</Typography>
              <Typography variant="h5">{item.released}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
}

export default Cards