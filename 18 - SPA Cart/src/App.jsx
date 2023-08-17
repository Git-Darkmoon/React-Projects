import { RouterProvider, createBrowserRouter } from "react-router-dom"
import PageLayout from "./Pages/PageLayout"
import Tours from "./Pages/Tours"
import About from "./Pages/About"
import ErrorPage from "./Pages/ErrorPage"
import TourInfo from "./Pages/TourInfo"

import { loader as tourLoader } from "./Pages/TourInfo"

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
        loader: tourLoader,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}
export default App
