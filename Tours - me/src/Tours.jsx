import React from "react"
import TourCard from "./TourCard"
import styles from "./styles/index.module.css"

const Tours = ({ tours, removeTour }) => {
  return (
    <section className={styles.wrapper}>
      {tours.map((eachTour) => {
        return (
          <TourCard key={eachTour.id} {...eachTour} removeTour={removeTour} />
        )
      })}
    </section>
  )
}

export default Tours
