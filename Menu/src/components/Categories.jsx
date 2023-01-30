import React from "react"
import menuProducts from "../data.js"
import "../styles/Categories.css"

const menuCategories = menuProducts.map((item) => {
  return item.category
})

const categories = ["all", ...new Set(menuCategories)]

function Categories() {
  return (
    <div className="category-btn-container">
      {categories.map((eachItem) => {
        return <button className="categoryBtn">{eachItem}</button>
      })}
    </div>
  )
}

export default Categories
