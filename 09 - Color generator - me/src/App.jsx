import { useState } from "react"

import ColorList from "./ColorList"
import Form from "./Form"
import Values from "values.js"
import { ToastContainer, toast } from "react-toastify"

function App() {
  const [colors, setColors] = useState([
    /* new Values("#646cff").all(10) */
  ])
  const [lightTheme, setLightTheme] = useState(false)

  let theme = lightTheme === false ? "" : "themeChanger"

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10)
      setColors(newColors)
    } catch (error) {
      toast.error("Color code not valid !!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  return (
    <section className={`container ${theme}`}>
      <header className={theme}>
        <h1 className="title">Color Generator</h1>
        <button className="themeBtn" onClick={() => setLightTheme(!lightTheme)}>
          {lightTheme === false ? (
            <i className="fa-solid fa-bolt"></i>
          ) : (
            <i className="fa-solid fa-moon "></i>
          )}
        </button>
      </header>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" limit={3} draggablePercent={50} />
    </section>
  )
}

export default App
