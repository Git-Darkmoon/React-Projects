import { useGlobalContext } from "../context"

function SearchForm() {
  const { setUserPrompt } = useGlobalContext()

  function handleSubmit(e) {
    e.preventDefault()
    const inputValue = e.target.elements.prompt.value
    setUserPrompt(inputValue)
  }

  return (
    <form className="gallery-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="prompt"
        id="gallery-prompt"
        placeholder="Search whatever, maybe cats..."
        required
        autoComplete="off"
      />
      <button type="submit" className="btn primary-btn">
        Search
      </button>
    </form>
  )
}

export default SearchForm
