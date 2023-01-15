import React, { useState, useEffect } from "react"
import Loading from "./Loading"
import Nav from "./Nav"
import Tours from "./Tours"
import "./styles/index.module.css"

const API_URL = "https://course-api.com/react-tours-project"

const App = () => {
  const [Loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])

  const getData = async () => {
    // setLoading(true)

    try {
      const response = await fetch(API_URL)
      const toursData = await response.json()
      setTours(toursData)
      // setLoading(false)
    } catch (error) {
      // setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (Loading) {
    return (
      <main className="container">
        <Loading />
      </main>
    )
  }

  return (
    <main className="container">
      <Nav />
      <Tours tours={tours} />
    </main>
  )
}

export default App
