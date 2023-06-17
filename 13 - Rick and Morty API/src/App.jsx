import Hero from "./Hero"
import title from "./assets/title.png"

function App() {
  return (
    <>
      <header>
        <img src={title} alt="" />
      </header>
      <Hero />
    </>
  )
}

export default App
