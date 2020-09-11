import React, { useState, useEffect } from 'react'
import { fetchData } from './api'
import Filters from './components/Filters.jsx'
import CardGrid from './components/CardGrid.jsx'
import styles from './App.module.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetchData()

      setItems(result.data.results)
      setIsLoading(false)

    }
    fetchItems()
  }, [])

  return (
    <div className={styles.container}>
      <Filters className={styles.filters} />
      <CardGrid isLoading={isLoading} items={items} />
    </div>
  )
}


export default App