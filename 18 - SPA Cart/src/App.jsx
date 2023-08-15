import { RouterProvider, createBrowserRouter } from "react-router-dom"
import PageLayout from "./Pages/PageLayout"
import Tours from "./Pages/Tours"
import TourInfo from "./Pages/TourInfo"
import ErrorPage from "./Pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Tours />,
        errorElement: <ErrorPage />,
      },
      {
        path: "tourInfo/:id",
        element: <TourInfo />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}
export default App
