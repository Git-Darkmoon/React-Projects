/* eslint-disable no-extra-semi */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { SlMagnifier } from "react-icons/sl"
import Character from "./Character"
import { useGlobalContext } from "./Context"

function Characters() {
  const { data, filterCharacters } = useGlobalContext()
  const [characterName, setCharacterName] = useState("")

  const [characters, setCharacters] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItems = filterCharacters(data, characterName)
    setCharacters(newItems)
  }

  const showAllCharacters = () => {
    setCharacters(data)
  }

  return (
    <>
      <h2 className="characters-title">Characters</h2>
      <form className="characters-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="form-searchBar"
          autoComplete="off"
          placeholder="Search Characters"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          required
        />
        <button type="submit" id="form-searchBtn" className="form-btn">
          <SlMagnifier />
        </button>
        <button
          type="button"
          id="form-showBtn"
          className="form-btn"
          onClick={showAllCharacters}
        >
          Show All
        </button>
      </form>
      <section className="characters-container">
        {characters.map((item) => {
          return <Character key={item.id} {...item} />
        })}
      </section>
    </>
  )
}

export default Characters
