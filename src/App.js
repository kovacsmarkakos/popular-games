import React from 'react'
import Cards from './components/Cards/Cards'
import Filters from './components/Filters/Filters'
import styles from './App.module.css'
import axios from 'axios'
import { fetchData } from './api'

class App extends React.Component {

  async componentDidMount() {
    const data = await fetchData()

    console.log(data)
  }

  render() {
    return (
      <div className={styles.container}>
        <Filters />
        <Cards />
      </div>
    )
  }
}

export default App