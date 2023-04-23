// import { useState } from "react"

function App() {
  return (
    <section>
      <header>
        <h1 className="title">Color Generator</h1>
        <button>
          <i className="fa-solid fa-moon"></i>
        </button>
      </header>
      <form className="section-form">
        <div className="form-options">
          <input type="color" name="" id="colorInput" />
          <input type="text" placeholder="#646cff" />
          <button type="submit" id="submitBtn">
            Generate
          </button>
        </div>
      </form>
      <section className="section-colors">
        <article className="color">
          <div className="color-visualize"></div>
          <h3>#646cff</h3>
          <h4>0%</h4>
        </article>
        <article className="color">
          <div className="color-visualize"></div>
          <h3>#646cff</h3>
          <h4>0%</h4>
        </article>
        <article className="color">
          <div className="color-visualize"></div>
          <h3>#646cff</h3>
          <h4>0%</h4>
        </article>
        <article className="color">
          <div className="color-visualize"></div>
          <h3>#646cff</h3>
          <h4>0%</h4>
        </article>
      </section>
    </section>
  )
}

export default App
