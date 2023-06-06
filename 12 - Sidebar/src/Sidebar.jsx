import { FaTimes } from "react-icons/fa"
import { links, social } from "./data"
import { useGlobalContext } from "./Context"

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <aside className={`sidebar ${isSidebarOpen && "show-sidebar"} `}>
      <header className="sidebar-header">
        <h2 className="logo">
          Codding <span>Darkmoon</span>
        </h2>
        <button className="sidebar-close_btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </header>
      <ul className="sidebar-links">
        {links.map((link) => {
          const { id, url, text, icon } = link

          return (
            <li key={id}>
              <a href={url} className="links">
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
