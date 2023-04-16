import { useState } from "react"
import { nanoid } from "nanoid" //npm i nanoid
import data from "./data"
import "./App.css"

function App() {
  const [paragraphQuantity, setParagraphQuantity] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setText(data.slice(0, paragraphQuantity))
  }

  return (
    <section className="section-center">
      <h2 className="section-title">Boring Lorem Ipsum?</h2>
      <form className="section-form" onSubmit={handleSubmit}>
        <label htmlFor="num">paragraphs:</label>
        <input
          type="number"
          id="num"
          min={1}
          max={9}
          placeholder="-"
          value={paragraphQuantity}
          onChange={(e) => setParagraphQuantity(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <section className="section-paragraphs">
        {text.map((paragraph, index) => {
          return (
            <p key={nanoid()} className="paragraph">
              <span className="paragraph-index">{`${index + 1})`}</span>{" "}
              {paragraph}
            </p>
          )
        })}
      </section>
    </section>
  )
}

export default App
