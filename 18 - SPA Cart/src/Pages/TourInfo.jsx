import { useState } from "react"
import { useLoaderData } from "react-router-dom"

const API_URL = "https://www.course-api.com/react-tours-project"

export const loader = async ({ params }) => {
  const { id } = params
  const response = await fetch(API_URL)
  const allTours = await response.json()

  return { id, allTours }
}

function TourInfo() {
  const { id, allTours } = useLoaderData()
  const [showMore, setShowMore] = useState(false)

  const singleTour = allTours.find((eachTour) => eachTour.id === id)
  const { image, name, info, price } = singleTour
  return (
    <section className="singleTour">
      <img src={image} alt="" className="singleTour-img" />
      <article className="singleTour-info">
        <h1 className="singleTour-title">{name}</h1>

        {showMore ? (
          <p className="singleTour-desc">
            {info}
            <button className="showMore" onClick={() => setShowMore(!showMore)}>
              Show Less
            </button>
          </p>
        ) : (
          <p className="singleTour-desc">
            {`${info.slice(0, 200)}... `}
            <button className="showMore" onClick={() => setShowMore(!showMore)}>
              Show More
            </button>
          </p>
        )}

        <h4>{price}</h4>
      </article>
    </section>
  )
}
export default TourInfo
