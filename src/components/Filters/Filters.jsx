import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './Filters.module.css'

const Filters = () => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="2020">2020</option>
      </NativeSelect>
    </FormControl>
  )
}

export default Filters