import React, { useState, useEffect } from "react"
import Loader from "./Loader"
import styles from "./styles/App.module.css"

const URL = "https://course-api.com/react-tabs-project"

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    const response = await fetch(URL)
    const jobsData = await response.json()

    setJobs(jobsData)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return <Loader />
  }

  const { id, order, title, dates, duties, company } = jobs

  return (
    <>
      <header>
        <h1 className={styles.title}>Experience</h1>
        <div className={styles.underline}></div>
      </header>

      <main>
        {/* btn container */}
        <section className={styles.btnContainer}></section>
        {/* Jobs container */}
        <section className={styles.jobsContainer}>
          {jobs.map(() => {
            return (
              <article key={id}>
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p>{dates}</p>
              </article>
            )
          })}
        </section>
      </main>
    </>
  )
}

export default App
