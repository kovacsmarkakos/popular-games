import React from "react";
import Cards from "./Cards.jsx";
import { makeStyles, Grid, CircularProgress } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 2),
  },
}));

const CardGrid = ({ isLoading, items, muted, setMuted, listSize }) => {
  const classes = useStyles();

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Cards
          items={items}
          muted={muted}
          setMuted={setMuted}
          listSize={listSize}
        />
      </Grid>
    </div>
  );
};

export default CardGrid;
