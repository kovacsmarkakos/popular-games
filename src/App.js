import React from 'react'
import Cards from './components/Cards/Cards'
import Filters from './components/Filters/Filters'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <Filters />
      <Cards />
    </div>
  )
}

export default App