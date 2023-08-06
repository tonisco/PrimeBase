import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import router from "./utils/router"

import "./index.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
