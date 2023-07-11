/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, createContext, useEffect, useState } from "react"
import axios from "axios"

const AppContext = createContext()
const API_URL = "https://icanhazdadjoke.com/"

export function AppProvider({ children }) {
  const [jokesData, setJokesData] = useState("")

  async function fetchData() {
    try {
      const { data } = await axios(API_URL, {
        headers: {
          Accept: "application/json",
        },
      })
      setJokesData(data.joke)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider value={{ jokesData, fetchData }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
