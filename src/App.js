import React, { useState, useEffect } from 'react'
import { fetchData } from './api'
import Filters from './components/Filters.jsx'
import CardGrid from './components/CardGrid.jsx'
import styles from './App.module.css'
import { Typography } from '@material-ui/core/';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [year, setYear] = useState(0)
  const [genre, setGenre] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetchData(year)

      setItems(result.data.results)
      setIsLoading(false)

    }
    fetchItems()
  }, [year])

  return (
    <div className={styles.container}>
      <Typography variant="h1">
        Game Ratings
      </Typography>
      <Filters
        className={styles.filters}
        year={year}
        setYear={setYear} />
      <CardGrid
        isLoading={isLoading}
        items={items} />
    </div>
  )
}

export default App