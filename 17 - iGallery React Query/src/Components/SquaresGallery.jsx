import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useGlobalContext } from "../context"
import Gallery_Item from "./Gallery_Item"

function SquaresGallery() {
  const { API_URL, userPrompt } = useGlobalContext()

  const querySquares = useQuery({
    queryKey: ["squareImages", userPrompt],
    queryFn: async () => {
      const response = await axios.get(
        `${API_URL}&query=${userPrompt}&page=4&orientation=squarish`
      )
      return response.data
    },
  })

  const fetchResultsSquares = querySquares?.data?.results

  if (querySquares.isLoading) {
    return (
      <section className="gallery-squares">
        <h1>Loading...</h1>
      </section>
    )
  }

  if (querySquares.isError) {
    return (
      <section className="gallery-squares">
        <h1>Something went wrong...</h1>
      </section>
    )
  }

  if (fetchResultsSquares.length < 1) {
    return (
      <section className="gallery-squares">
        <h1>No results found...</h1>
      </section>
    )
  }

  return (
    <section className="gallery-squares">
      {fetchResultsSquares.map((item) => {
        return <Gallery_Item key={item.id} {...item} />
      })}
    </section>
  )
}

export default SquaresGallery
