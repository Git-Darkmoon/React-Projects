import { useState, createContext, useContext } from "react"

const AppContext = createContext()

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
  const [data, setData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [selectedCharacter, setSelectedCharacter] = useState({})

  // Function used in App.jsx

  const fetchData = async (URL) => {
    try {
      const response = await fetch(URL)
      const result = await response.json()
      setData(result.results)
    } catch (error) {
      setData([])
      console.log(error)
    }
  }

  // Function used in Characters.jsx

  function filterCharacters(dataArray, cName) {
    return dataArray.filter((item) =>
      item?.name?.toLowerCase().includes(cName?.toLowerCase().trim())
    )
  }

  // Functions used in ModalDetails.jsx and Character.jsx

  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      // Properties passed as global values.

      value={{
        data,
        setData,
        fetchData,
        filterCharacters,
        isModalOpen,
        openModal,
        closeModal,
        selectedCharacter,
        setSelectedCharacter,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext)
}
