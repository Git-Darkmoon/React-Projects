const actualYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      Copyright &copy;
      <a
        href="https://github.com/Git-Darkmoon"
        target="_blank"
        rel="noopener noreferrer"
        id="github_link"
      >
        Nicolas Mayorga
      </a>
      | {actualYear}
    </footer>
  )
}
export default Footer
