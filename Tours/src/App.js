import React, { useState, useEffect } from "react"
import Loading from "./Loading"
import Tours from "./Tours"

const url = "https://course-api.com/react-tours-project"

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  function removeTour(id) {
    const newTours = tours.filter((eachTour) => eachTour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)

      const toursData = await response.json()
      setTours(toursData)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
