import { React, useState, useEffect } from "react"
import styles from "./styles/content.module.css"

const Content = () => {
  const [resourceType, setResourceType] = useState("posts")
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((jsonData) => setItems(jsonData))
  }, [resourceType])

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>JSON Filter</h1>
        </div>
        <ul className={styles.btnsWrapper}>
          <button
            className={styles.btn}
            onClick={() => setResourceType("posts")}
          >
            Posts
          </button>
          <button
            className={styles.btn}
            onClick={() => setResourceType("users")}
          >
            Users
          </button>
          <button
            className={styles.btn}
            onClick={() => setResourceType("comments")}
          >
            Comments
          </button>
        </ul>
      </nav>
      <section className={styles.content}>
        <h1 className={styles.title}>{resourceType}</h1>
        <section className={styles.data}>
          {items.map((eachItem, index) => {
            return (
              <>
                <pre key={index}>{JSON.stringify(eachItem)}</pre>
                <br />
                <br />
              </>
            )
          })}
        </section>
      </section>
    </>
  )
}

export default Content
