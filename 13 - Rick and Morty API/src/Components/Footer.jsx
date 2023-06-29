import { BsLinkedin, BsGithub } from "react-icons/bs"
import { AiFillFileMarkdown } from "react-icons/ai"

function Footer() {
  const actualYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-copyright">
        &copy; {actualYear} Nicolas Mayorga | All Rights Reserved
      </div>
      <ul className="footer-social">
        <li>
          <a
            className="footer-social__links"
            href="https://www.linkedin.com/in/nicol%C3%A1s-mayorga-7z0/"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            className="footer-social__links"
            href="https://github.com/Git-Darkmoon"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            className="footer-social__links"
            href="https://github.com/Git-Darkmoon/R-M-v1.0/tree/main"
          >
            <AiFillFileMarkdown />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
