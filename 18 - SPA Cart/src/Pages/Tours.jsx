import TourInfo from "./TourCard"
import errorLogo from "../assets/undraw_server_down.svg"
import { useGlobalContext } from "../context"

function Tours() {
  const { data, isLoading, isError } = useGlobalContext()

  if (isLoading) {
    return (
      <section className=" response-container">
        <h1>Loading...</h1>
        <div className="loading-spinner"></div>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="response-container">
        <h1>Something Went wrong...</h1>
        <img className="errorImg" src={errorLogo} alt="problems fetching API" />
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
