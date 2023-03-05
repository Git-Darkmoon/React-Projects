import React, { useState, useEffect } from "react"
import Loader from "./Loader"
import styles from "./styles/App.module.css"
import { BsCodeSlash } from "react-icons/bs"
const URL = "https://course-api.com/react-tabs-project"

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [jobIndex, setJobIndex] = useState(0)

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

  const { id, order, title, dates, duties, company } = jobs[jobIndex]

  return (
    <>
      <header>
        <h1 className={styles.title}>Experience</h1>
        <div className={styles.underline}></div>
      </header>

      <main className={styles.container}>
        {/* btn container */}
        <section className={styles.btnContainer}>
          {jobs.reverse().map((job) => {
            return (
              <button
                key={job.id}
                onClick={() => {
                  setJobIndex(job.order - 1)
                }}
              >
                {job.company}
              </button>
            )
          })}
        </section>
        {/* Jobs container */}
        <section className={styles.jobsContainer}>
          <article key={id}>
            <h3 className={styles.jobTitle}>{title}</h3>
            <span className={styles.company}>{company}</span>
            <p className={styles.jobDate}>{dates}</p>
            <ul>
              {duties.map((duty, index) => {
                return (
                  <li key={index} className={styles.duty}>
                    <BsCodeSlash className={styles.jobIcon} />
                    {duty}
                  </li>
                )
              })}
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}

export default App
