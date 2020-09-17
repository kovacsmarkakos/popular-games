import React from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    margin: theme.spacing(3, 'auto'),
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

const Filters = ({ year, setYear, fetchedGenres, genre, setGenre }) => {

  const classes = useStyles();

  const handleYearChange = (event) => {
    setYear(event.target.value);
  }
  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  }

  const now = new Date().getUTCFullYear();
  const yearsArr = Array(now - (now - 30)).fill('').map((v, idx) => now - idx);

  return (
    <div className={classes.filterContainer}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={year ? year : ''}
          onChange={handleYearChange}
          label="Years" >
          {yearsArr.map((year, i) => <MenuItem key={i} value={year}>{year}</MenuItem>)}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={genre ? genre : ''}
          onChange={handleGenreChange}
          label="Genre" >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {fetchedGenres.map((genre) => <MenuItem key={genre.id} value={genre.slug}>{genre.name}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  )
}

export default Filters