import React from "react"
import styles from "./styles/Loader.module.css"

function Loader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        <div className={styles.spinner1}></div>
      </div>
    </div>
  )
}

export default Loader
