import { useEffect, useState } from "react"
import Character from "./Character"

function Characters() {
  const API_URL = "https://rickandmortyapi.com/api/character"

  const [data, setData] = useState([])

  const fetchData = async (URL) => {
    const response = await fetch(URL)
    const result = await response.json()
    console.log(result.results)
    setData(result.results)
  }

  useEffect(() => {
    fetchData(API_URL)
  }, [])

  return (
    <>
      <h2 className="characters-title">Characters</h2>
      <section className="characters-container">
        {data.map((item) => {
          const { id, image, name, status, species } = item

          return (
            <Character
              key={id}
              image={image}
              name={name}
              status={status}
              species={species}
            />
          )
        })}
      </section>
    </>
  )
}

export default Characters
