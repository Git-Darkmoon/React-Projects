import React, { useState, useEffect } from "react"
import Load from "./Loading"
import Nav from "./Nav"
import Tours from "./Tours"
import styles from "./styles/index.module.css"

const API_URL = "https://course-api.com/react-tours-project"

const App = () => {
  const [Loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  function removeTour(id) {
    const newUsers = tours.filter((eachTour) => eachTour.id !== id)
    setTours(newUsers)
  }

  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await fetch(API_URL)
      const toursData = await response.json()
      setTours(toursData)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (Loading) {
    return (
      <main className={styles.container}>
        <Load />
      </main>
    )
  }

  return (
    <main>
      <Nav />
      {tours.length === 0 ? (
        <main className={styles.refreshContainer}>
          <button className={styles.btn} onClick={fetchData}>
            Refresh All
          </button>
        </main>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </main>
  )
}

export default App
