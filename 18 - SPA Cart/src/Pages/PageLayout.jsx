import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function PageLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading"

  return (
    <>
      <Navbar />
      <div className="container">
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </>
  )
}
export default PageLayout
