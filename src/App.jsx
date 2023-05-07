import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home"
import Aboutpokemon from "./pages/Aboutpokemon";

function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/pokemon/:id",
        element: <Aboutpokemon />,
      }
    ]
  )

  return (
    <RouterProvider router={routes} />
  )
}

export default App
