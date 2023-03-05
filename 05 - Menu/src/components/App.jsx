import React, { useState } from "react"
import Categories from "./Categories"
import Menu from "./Menu"
import menuProducts from "../data"

import "../styles/App.css"

function App() {
  const [products, setProducts] = useState(menuProducts)

  const filterFood = (category) => {
    if (category === "all") {
      setProducts(menuProducts)
      return
    }
    const newItems = menuProducts.filter((item) => item.category === category)
    setProducts(newItems)
  }

  return (
    <main className="container">
      <h1 className="title">
        our <span>menu</span>
      </h1>
      <Categories filterFood={filterFood} />
      <Menu products={products} />
    </main>
  )
}

export default App
