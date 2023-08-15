import { RouterProvider, createBrowserRouter } from "react-router-dom"
import PageLayout from "./Pages/PageLayout"
import Tours from "./Pages/Tours"
import Cart from "./Pages/Cart"
import ErrorPage from "./Pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Tours />,
        errorElement: <ErrorPage />,
      },
      {
        path: "cart/:id",
        element: <Cart />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}
export default App
