import React, { useState } from "react"
import data from "./data"
import "./List.css"

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
          <section key={id} className="item">
            <section className="elements">
              <img src={image} alt="" />
              <div className="info">
                <h3 id="name">{name}</h3>
                <h4 id="age">{age}</h4>
              </div>
            </section>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </section>
        )
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </>
  )
}

export default List
