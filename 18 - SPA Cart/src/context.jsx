import { useQuery } from "@tanstack/react-query"
import { createContext, useContext, useState } from "react"
import { toast } from "sonner"

console.clear()

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

  const [showItems, setShowItems] = useState(false)

  function addItem(id) {
    const tourItem = data.find((eachTour) => id === eachTour.id)
    setCartItems([...cartItems, tourItem])
  }

  function handleAddToCart(itemID) {
    const isItemAdded = cartItems.some((item) => item.id === itemID)

    if (isItemAdded) {
      toast.error("Cannot add the same tour twice.")
    } else {
      toast.success("Tour added to cart.")
      addItem(itemID)
    }
  }

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
        handleAddToCart,
        data,
        isLoading,
        isError,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
