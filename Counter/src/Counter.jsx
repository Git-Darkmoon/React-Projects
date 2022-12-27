import { useState } from "react"
import "./styles/Counter.css"

const Counter = () => {
  const [value, setValue] = useState(0)

  return (
    <section className="wrapper">
      <h1>{value}</h1>
      <section className="actions">
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
    </section>
  )
}

export default Counter
