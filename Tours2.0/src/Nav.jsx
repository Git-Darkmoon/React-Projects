import React from "react"

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>iTours</h2>
      </div>
      <ul className="links_section">
        <li>
          <a href="">
            <h4>Home</h4>
          </a>
        </li>
        <li>
          <a href="">
            <h4>About</h4>
          </a>
        </li>
        <li>
          <a href="">
            <h4>Contact Us</h4>{" "}
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
