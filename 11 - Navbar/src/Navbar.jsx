// import { useState, useRef } from "react"
import logo from "./assets/logo.png"
import { links, social } from "./data"
import { useState, useRef } from "react"

function Navbar() {
  const [showLinks, setShowLinks] = useState(false)

  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  }

  return (
    <nav className="navbar">
      <div className="nav-header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className={`burger ${showLinks && "open"}`} onClick={toggleLinks}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="links__container" style={linkStyles}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            )
          })}
        </ul>
      </div>

      {/* {showLinks && (
        <div className="links__container">
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
      )} */}

      <ul className="social__icons">
        {social.map((eachOne) => {
          const { id, url, icon } = eachOne
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
