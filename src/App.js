import React, { useState, useEffect } from 'react'
import Cards from './components/Cards/Cards'
import Filters from './components/Filters/Filters'
import styles from './App.module.css'
import { fetchData } from './api'

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
      <Cards isLoading={isLoading} items={items} />
    </div>
  )
}


export default App