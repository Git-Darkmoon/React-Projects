/* eslint-disable react/prop-types */
import { useState } from "react"

function Form({ addColor }) {
  const [color, setColor] = useState(undefined)

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }

  return (
    <form className="section-form" onSubmit={handleSubmit}>
      <div className="form-options">
        <input
          type="color"
          value={color ?? "#646cff"}
          id="colorInput"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          placeholder="#646cff"
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit" id="submitBtn">
          Generate
        </button>
      </div>
    </form>
  )
}

export default Form
