import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"
import { RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import router from "./utils/router"

import "./index.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "react-toastify/dist/ReactToastify.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
