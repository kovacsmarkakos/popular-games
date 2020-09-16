import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: 40,
    right: 40,
  },
})

const SoundToggle = ({ muted, setMuted }) => {
  const [checked, setChecked] = React.useState(false)
  const classes = useStyles()

  const toggleChecked = () => {
    setChecked((prev) => !prev)
    setMuted((prev) => !prev)
  }

  return (
    <FormGroup className={classes.root}>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={toggleChecked}
            color="primary" />}
        label="Sound"
        labelPlacement="start"
      />
    </FormGroup>
  )
}

export default SoundToggle
