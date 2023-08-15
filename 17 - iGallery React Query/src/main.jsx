import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./Styles/index.css"
import AppProvider from "./context.jsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </AppProvider>
)
