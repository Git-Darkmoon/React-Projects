import { nanoid } from "nanoid"
import SingleColor from "./SingleColor"

function ColorList({ colors }) {
  return (
    <section className="color">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />
      })}
    </section>
  )
}

export default ColorList
