import React from "react"
import Categories from "./Categories"
import Menu from "./Menu"
import "../styles/App.css"

function App() {
  return (
    <main className="container">
      <h1 className="title">
        our <span>menu</span>
      </h1>
      <Categories />
      <Menu />
    </main>
  )
}

export default App
