import { createBrowserRouter } from "react-router-dom"

import Apply from "../pages/Apply"
import Home from "../pages/Home"
import Loans from "../pages/Loans"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/apply", element: <Apply /> },
  { path: "/loans", element: <Loans /> },
])

export default router
