import React from "react"
// import menuProducts from "../data"
import "../styles/Menu.css"

function Menu({ products }) {
  return (
    <div className="products">
      {products.map((eachProduct) => {
        const { id, title, price, img, desc } = eachProduct

        return (
          <div className="card" key={id}>
            <img src={img} alt={title} />
            <article className="info">
              <header>
                <h2>{title}</h2>
                <h4>${price}</h4>
              </header>
              <p>{desc}</p>
            </article>
          </div>
        )
      })}
    </div>
  )
}

export default Menu
