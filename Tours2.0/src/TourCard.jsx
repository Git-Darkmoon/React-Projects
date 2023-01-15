import React, { useState } from "react"
import styles from "./styles/index.module.css"

const TourCard = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <article
      className={styles.card}
      style={{
        backgroundImage: ` linear-gradient(to bottom, hsla(249, 24%, 16%,0.15) 25% ,hsl(249, 24%, 14%) 80% ), url(${image})`,
      }}
    >
      <h2>
        {name} <h4>$ {price}</h4>
      </h2>
      <h5>
        <section>
          {readMore ? info : `${info.slice(0, 200)}...`}
          <button
            className={styles.readBtn}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </section>
        <button className={styles.btn} onClick={() => removeTour(id)}>
          <h5>Not interested</h5>
        </button>
      </h5>
    </article>
  )
}

export default TourCard
