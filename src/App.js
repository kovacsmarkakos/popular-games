import React, { useState, useEffect } from 'react'
import { fetchData, fetchGenres } from './api'
import Filters from './components/Filters.jsx'
import CardGrid from './components/CardGrid.jsx'
import Footer from './components/Footer'
import styles from './App.module.css'
import { Typography } from '@material-ui/core/';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [year, setYear] = useState(0)
  const [fetchedGenres, setFetchedGenres] = useState([])
  const [genre, setGenre] = useState("")

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedGenres(await fetchGenres())
    }
    fetchAPI()
  }, [setFetchedGenres])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetchData(year, genre)

      setItems(result)
      setIsLoading(false)
    }
    fetchItems()
  }, [year, genre])

  return (
    <>
      <div className={styles.container}>
        <Typography variant="h1" gutterBottom>
          Popular Games
      </Typography>
        <Typography variant="h5" >
          The most popular games by year and genre
      </Typography>
        <Filters
          className={styles.filters}
          year={year}
          setYear={setYear}
          genre={genre}
          setGenre={setGenre}
          fetchedGenres={fetchedGenres} />
        <CardGrid
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          items={items} />
      </div>
      <Footer />
    </>
  )
}

export default App