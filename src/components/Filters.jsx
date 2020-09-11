import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

const Filters = () => {
  return (
    <FormControl>
      <NativeSelect>
        <option value="2020">2020</option>
      </NativeSelect>
    </FormControl>
  )
}

export default Filters