import React from "react"
import Tour from "./Tour"
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Ours Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((eachTour) => {
          return (
            <Tour key={eachTour.id} {...eachTour} removeTour={removeTour} />
          )
        })}
      </div>
    </section>
  )
}

export default Tours
