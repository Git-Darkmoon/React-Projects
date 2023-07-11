/* eslint-disable react-hooks/exhaustive-deps */
import { useGlobalContext } from "./context"

function App() {
  const { jokesData, fetchData } = useGlobalContext()

  return (
    <main className="wrapper">
      <article className="card">
        <h1 className="card-title">Jokes Generator</h1>
        <p className="card-content">{jokesData}</p>
        <button className="btn" onClick={fetchData}>
          Generate
        </button>
      </article>
    </main>
  )
}

export default App
