import { useState } from "react"

import ColorList from "./ColorList"
import Form from "./Form"
import Values from "values.js"

function App() {
  const [colors, setColors] = useState(new Values("#646cff").all(25))

  const addColor = (color, weight) => {
    try {
      const newColors = new Values(color).all(weight)
      setColors(newColors)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <section>
      <header>
        <h1 className="title">Color Generator</h1>
        <button>
          <i className="fa-solid fa-moon"></i>
        </button>
      </header>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </section>
  )
}

export default App
