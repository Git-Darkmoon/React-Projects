import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./styles/index.css"
import { AppProvider } from "./Components/Context.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* This AppProvider comes from the 
      custom hook of useGlobalContext. */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
