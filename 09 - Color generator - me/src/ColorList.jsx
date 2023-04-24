/* eslint-disable react/prop-types */
import { v4 as uuid } from "uuid"
import SingleColor from "./SingleColor"

function ColorList({ colors }) {
  return (
    <section className="section-colors">
      {colors.map((color) => {
        return <SingleColor key={uuid()} color={color} />
      })}
    </section>
  )
}

export default ColorList
