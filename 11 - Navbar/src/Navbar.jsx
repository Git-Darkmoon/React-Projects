// import { useState, useRef } from "react"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import logo from "./assets/logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links__container">
        <ul className="links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Info</a>
          </li>
        </ul>
      </div>
      <ul className="social__icons">
        <li>
          <a href="">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="">
            <FaGithub />
          </a>
        </li>
      </ul>
      <div className="burger">
        <div className="burgerLine1"></div>
        <div className="burgerLine2"></div>
        <div className="burgerLine3"></div>
      </div>
    </nav>
  )
}

export default Navbar
