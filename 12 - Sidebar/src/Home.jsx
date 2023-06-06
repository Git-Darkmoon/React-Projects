import { FaBars } from "react-icons/fa"
import { useGlobalContext } from "./Context"

function Home() {
  const { openSidebar } = useGlobalContext()

  return (
    <div className="home">
      <FaBars className="home-icon" onClick={openSidebar} />
      <h2 className="home-title">Sidebar</h2>
    </div>
  )
}

export default Home
