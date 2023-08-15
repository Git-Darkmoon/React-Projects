import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>iTours</h1>
      </div>
      <ul className="linksList">
        <li>
          <NavLink to={"/"} className={"links"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={"links"}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
