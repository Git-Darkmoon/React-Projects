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

  const singleTour = allTours.find((eachTour) => eachTour.id === id)
  const { image, name, info, price } = singleTour
  return (
    <section className="singleTour">
      <img src={image} alt="" className="singleTour-img" />
      <article className="singleTour-info">
        <h1 className="singleTour-title">{name}</h1>
        <p className="singleTour-desc">{info}</p>
        <h4>{price}</h4>
      </article>
    </section>
  )
}
export default TourInfo