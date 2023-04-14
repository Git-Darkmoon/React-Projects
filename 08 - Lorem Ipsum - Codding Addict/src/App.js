import React, { useState } from "react"
import data from "./data"
import { nanoid } from "nanoid"

function App() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0, amount))
  }

  return (
    <section className="section-center">
      <h4>tired of borind lorem ipsum ?</h4>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          console.log(nanoid())
          return <p key={nanoid()}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
