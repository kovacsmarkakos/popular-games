import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    margin: theme.spacing(2, 0),
    zIndex: 10,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
    },
  },
  formControl: {
    margin: theme.spacing(1, 2),
    minWidth: 150,
  },
}));

const Filters = ({
  year,
  setYear,
  fetchedGenres,
  genre,
  setGenre,
  listSize,
  setListSize,
}) => {
  const classes = useStyles();

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };
  const handleListSizeChange = (event) => {
    setListSize(event.target.value);
  };

  const now = new Date().getUTCFullYear();
  const yearsArr = Array(now - (now - 30))
    .fill("")
    .map((v, idx) => now - idx);

  return (
    <div className={classes.filterContainer}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={year ? year : ""}
          onChange={handleYearChange}
          label="Years"
        >
          {yearsArr.map((year, i) => (
            <MenuItem key={i} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={genre ? genre : ""}
          onChange={handleGenreChange}
          label="Genre"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {fetchedGenres.map((genre) => (
            <MenuItem key={genre.id} value={genre.slug}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          List Size
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={listSize ? listSize : ""}
          onChange={handleListSizeChange}
          label="List Size"
        >
          <MenuItem key={4} value={4}>
            4
          </MenuItem>
          <MenuItem key={8} value={8}>
            8
          </MenuItem>
          <MenuItem key={12} value={12}>
            12
          </MenuItem>
          <MenuItem key={16} value={16}>
            16
          </MenuItem>
          <MenuItem key={20} value={20}>
            20
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filters;
