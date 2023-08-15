import Footer from "./Components/Footer"
import Gallery from "./Components/Gallery"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"

function App() {
  return (
    <>
      <Sidebar />
      <main className="wrapper">
        <Navbar />
        <Hero />
        <Gallery />
        <Footer />
      </main>
    </>
  )
}

export default App
