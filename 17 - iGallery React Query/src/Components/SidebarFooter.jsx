import { AiFillFileMarkdown } from "react-icons/ai"
import { BsGithub, BsLinkedin } from "react-icons/bs"

function SidebarFooter() {
  const actualYear = new Date().getFullYear()

  return (
    <footer className="sidebar-footer">
      <div className="footer-copyright">
        &copy; {actualYear} Nicolas Mayorga | All Rights Reserved
      </div>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/nicol%C3%A1s-mayorga-7z0/"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Git-Darkmoon"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Git-Darkmoon/iGallery-App/blob/main/README.md"
          >
            <AiFillFileMarkdown />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default SidebarFooter
