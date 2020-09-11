import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 650,
    height: 550,
  },
}));

const Cards = ({ items, isLoading }) => {
  const classes = useStyles();

  return isLoading ? <h1>Loading...</h1> :
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">2012</ListSubheader>
        </GridListTile>
        {items.map(item => (
          <GridListTile key={item.id}>
            <img
              src={item.background_image}
              alt={item.background_image_additional} />
            <GridListTileBar
              title={item.name}
              subtitle={<span>Metacritic: {item.metacritic}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
}

export default Cards