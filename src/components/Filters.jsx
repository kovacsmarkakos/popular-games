import React from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Filters = ({ year, setYear }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const now = new Date().getUTCFullYear();
  const yearsArr = Array(now - (now - 30)).fill('').map((v, idx) => now - idx);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Years</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={year ? year : ''}
        onChange={handleChange}
        label="Years" >
        {yearsArr.map((year, i) => <MenuItem key={i} value={year}>{year}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default Filters