import { useEffect } from "react"
import { useGlobalContext } from "./Components/Context"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import Characters from "./Components/Characters"
import ModalDetails from "./Components/ModalDetails"
import Footer from "./Components/Footer"

function App() {
  const randomPage = Math.round(Math.random() * 42)

  const API_URL = `https://rickandmortyapi.com/api/character?page=${randomPage}`

  const { fetchData } = useGlobalContext()

  useEffect(() => {
    fetchData(API_URL)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <section className="principal">
        <Nav />
        <Hero />
      </section>
      <Characters />
      <ModalDetails />
      <Footer />
    </>
  )
}

export default App
