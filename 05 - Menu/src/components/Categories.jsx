import React from "react"
import menuProducts from "../data.js"
import "../styles/Categories.css"

const menuCategories = menuProducts.map((item) => {
  return item.category
})

const categories = ["all", ...new Set(menuCategories)]

function Categories({ filterFood }) {
  return (
    <div className="category-btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className="categoryBtn"
            onClick={() => filterFood(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
