import { createBrowserRouter } from "react-router-dom"

import Apply from "../pages/Apply"
import Home from "../pages/Home"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/apply", element: <Apply /> },
])

export default router
