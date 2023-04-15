import React from "react"
import "./App.css"

function App() {
  return (
    <section className="section-center">
      <h2 className="section-title">Boring Lorem Ipsum?</h2>
      <form className="section-form">
        <label htmlFor="num">paragraphs:</label>
        <input type="number" id="num" min={1} max={8} />
        <button className="btn">Generate</button>
      </form>
    </section>
  )
}

export default App
