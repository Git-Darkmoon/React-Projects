import { createContext, useContext, useState } from "react"

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

// eslint-disable-next-line react/prop-types
function AppContext({ children }) {
  const [name, setName] = useState("Peter")

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext
