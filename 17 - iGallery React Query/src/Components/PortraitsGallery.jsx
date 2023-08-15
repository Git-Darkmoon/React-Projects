import { useQuery } from "@tanstack/react-query"
import { useGlobalContext } from "../context"
import axios from "axios"
import Gallery_Item from "./Gallery_Item"

function PortraitsGallery() {
  const { API_URL, userPrompt } = useGlobalContext()

  const queryPortraits = useQuery({
    queryKey: ["portraitImages", userPrompt],
    queryFn: async () => {
      const response = await axios.get(
        `${API_URL}&query=${userPrompt}&page=1&per_page=15&orientation=portrait`
      )
      return response.data
    },
  })

  const fetchResultsPortraits = queryPortraits?.data?.results

  if (queryPortraits.isLoading) {
    return (
      <section className="gallery-portraits">
        <h1>Loading...</h1>
      </section>
    )
  }

  if (queryPortraits.isError) {
    return (
      <section className="gallery-portraits">
        <h1>Something went wrong...</h1>
      </section>
    )
  }

  if (fetchResultsPortraits.length < 1) {
    return (
      <section className="gallery-portraits">
        <h1>No results found...</h1>
      </section>
    )
  }

  return (
    <section className="gallery-portraits">
      {fetchResultsPortraits.map((item) => {
        return <Gallery_Item key={item.id} {...item} />
      })}
    </section>
  )
}

export default PortraitsGallery
