import { useQuery } from "@tanstack/react-query"
import TourInfo from "./TourCard"

const API_URL = "https://www.course-api.com/react-tours-project"

function Tours() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const response = await fetch(API_URL)
      const tours = response.json()
      return tours
    },
  })

  if (isLoading) {
    return (
      <section className="tours-container">
        <h1>Loading...</h1>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="tours-container">
        <h1>Something Went wrong...</h1>
      </section>
    )
  }

  return (
    <section className="tours-container">
      {data.map((eachTour) => {
        return <TourInfo key={eachTour.id} {...eachTour} />
      })}
    </section>
  )
}
export default Tours
