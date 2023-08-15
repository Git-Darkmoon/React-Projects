import logo from "../assets/iGallery_favicon.svg"
import { LiaTimesSolid } from "react-icons/lia"
import { useGlobalContext } from "../context"
import SidebarFooter from "./SidebarFooter"

function Sidebar() {
  const { isSideOpen, closeSidebar } = useGlobalContext()

  return (
    <section className={`sidebar-overlay ${isSideOpen && "showSidebar"}`}>
      <LiaTimesSolid className="icon" onClick={closeSidebar} />
      <aside className="sidebar">
        <picture className="logo-container">
          <h1>iGallery App</h1>
          <img src={logo} alt="" id="logo" />
        </picture>
        <ul className="sidebar-links">
          <li>
            <a
              href="https://unsplash.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Site
            </a>
          </li>
          <li>
            <a
              href="https://unsplash.com/documentation#search-photos"
              target="_blank"
              rel="noopener noreferrer"
            >
              API Documentation
            </a>
          </li>
        </ul>
        <SidebarFooter />
      </aside>
    </section>
  )
}

export default Sidebar
