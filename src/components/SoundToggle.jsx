import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import zIndex from '@material-ui/core/styles/zIndex';

const SoundToggle = ({ muted, setMuted }) => {
  const [checked, setChecked] = React.useState(false)

  const toggleChecked = () => {
    setChecked((prev) => !prev)
    setMuted((prev) => !prev)
  }

  return (
    <FormGroup>
      <FormControlLabel
        style={{ zIndex: 10 }}
        control={
          <Switch
            checked={checked}
            onChange={toggleChecked}
            color="secondary" />}
        label="Sound"
        labelPlacement="start"
      />
    </FormGroup>
  )
}

export default SoundToggle
