import { useQuery } from "@tanstack/react-query"
import { createContext, useContext, useState } from "react"

export const AppContext = createContext()

export const useGlobalContext = () => useContext(AppContext)

const API_URL = "https://www.course-api.com/react-tours-project"

export function AppProvider({ children }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const response = await fetch(API_URL)
      const tours = response.json()
      return tours
    },
  })

  const [cartItems, setCartItems] = useState([])
  const [invalidID, setInvalidID] = useState(false)

  const [showItems, setShowItems] = useState(false)

  function addItem(id) {
    const isItemAdded = cartItems.some((item) => item.id === id)
    setInvalidID(isItemAdded)

    if (invalidID) return

    const tourItem = data.find((eachTour) => id === eachTour.id)
    setCartItems([...cartItems, tourItem])
  }
  console.log(cartItems)

  function toggleShowCart() {
    setShowItems(!showItems)
  }

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        showItems,
        toggleShowCart,
        addItem,
        invalidID,
        data,
        isLoading,
        isError,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
