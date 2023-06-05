import { FaTimes } from "react-icons/fa"
import { links, social } from "./data"
import logo from "./assets/logo.png"

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <img src={logo} alt="" />
        <FaTimes />
      </header>
      <ul className="sidebar-links">
        {links.map((link) => {
          const { id, url, text, icon } = link

          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="sidebar-social">
        {social.map((eachSocial) => {
          const { id, url, icon } = eachSocial

          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
