/* eslint-disable react/prop-types */
import { useState } from "react"

function Form({ addColor }) {
  const [color, setColor] = useState("")
  const [weight, setWeight] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color, weight)
  }

  return (
    <form className="section-form" onSubmit={handleSubmit}>
      <div className="form-options">
        <input
          type="color"
          value={color}
          id="colorInput"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          placeholder="#646cff"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="number"
          value={weight}
          placeholder="10"
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type="submit" id="submitBtn">
          Generate
        </button>
      </div>
    </form>
  )
}

export default Form
