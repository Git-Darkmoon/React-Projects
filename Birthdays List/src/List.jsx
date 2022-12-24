import React, { useState } from "react"
import data from "./data"

const List = () => {
  const removeItem = (id) => {
    let filtered_People = people.filter((person) => person.id !== id)
    setPeople(filtered_People)
  }

  const [people, setPeople] = useState(data)

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person

        return (
          <section>
            <section>
              <img src={image} alt="" />
            </section>
            <div className="info">
              <h3>{name}</h3>
              <h4>{age}</h4>
            </div>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </section>
        )
      })}
    </>
  )
}

export default List
