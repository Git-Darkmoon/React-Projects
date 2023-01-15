import React from "react"
import styles from "./styles/index.module.css"

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h2>iTours</h2>
      </div>
      <ul className={styles.links_section}>
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
