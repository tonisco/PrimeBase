import { createBrowserRouter } from "react-router-dom"

import Apply from "../pages/Apply"
import Home from "../pages/Home"
import Loans from "../pages/Loans"
import LoanDetails from "../pages/Loans/Detail"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/apply", element: <Apply /> },
  { path: "/loans", element: <Loans /> },
  { path: "/loans/:id", element: <LoanDetails /> },
])

export default router
