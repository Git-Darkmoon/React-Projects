import React from "react"
import styles from "./styles/index.module.css"

const TourCard = ({ id, name, info, image, price }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h2>Burano Doors</h2>
      <h5>
        {info}
        <button className={styles.btn}>Read More</button>
      </h5>
    </div>
  )
}

export default TourCard
