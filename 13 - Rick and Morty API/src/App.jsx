import Characters from "./Characters"
import Hero from "./Hero"
import title from "./assets/title.png"

function App() {
  return (
    <>
      <main className="principal">
        <header>
          <img src={title} alt="" />
        </header>
        <Hero />
      </main>
      <Characters />
    </>
  )
}

export default App
