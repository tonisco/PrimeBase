import { useState } from "react"
import { IoMdMenu } from "react-icons/io"
import { NavLink } from "react-router-dom"

import Sidebar from "./Sidebar"

import logo from "/images/logo.svg"

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => setShowModal(!showModal)

  return (
    <header className="p-6 bg-white ">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Prime Base Logo"
            className="object-cover w-6 h-6 text-blue-300"
          />
          <h3 className="text-2xl font-semibold">Prime Base</h3>
        </div>
        <ul className="items-center hidden gap-4 sm:flex">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>Loan</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <IoMdMenu className="block text-xl sm:hidden" onClick={toggleModal} />
      </nav>

      <Sidebar toggleModal={toggleModal} showModal={showModal} />
    </header>
  )
}

export default Navbar
