// import React from 'react'

import Footer from "./Footer"
import Navbar from "./Navbar"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <div>{children}</div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
