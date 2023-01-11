import React, { useState, useEffect } from "react"
import Loading from "./Loading"
import Nav from "./Nav"
import Tours from "./Tours"
import "./styles/index.modules.css"

const API_URL = "https://course-api.com/react-tours-project"

const App = () => {
  const [isLoading, setIsLoading] = useState(false)

  if (isLoading) {
    return (
      <main className="container">
        <Loading />
      </main>
    )
  }

  return (
    <main className="container">
      <Nav />
      <Tours />
    </main>
  )
}

export default App
