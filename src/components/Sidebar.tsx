import { IoMdClose } from "react-icons/io"
import { NavLink } from "react-router-dom"

type Props = {
  toggleModal: () => void
  showModal: Boolean
}

const Sidebar = ({ toggleModal, showModal }: Props) => {
  return (
    <>
      <nav
        className={`fixed sm:hidden top-0 transition-[transform] duration-500 left-0 z-50 shadow-lg w-11/12 max-w-[14rem] h-full bg-white px-6 py-16 ${
          showModal ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <IoMdClose
          className="absolute text-xl sm:hidden top-8 right-8"
          onClick={toggleModal}
        />
        <ul className="flex flex-col items-start gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/apply">Apply</NavLink>
          </li>
          <li>Loans</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      {showModal && (
        <div
          onClick={toggleModal}
          className="fixed top-0 bottom-0 left-0 right-0 z-10 sm:hidden bg-black/50"
        ></div>
      )}
    </>
  )
}

export default Sidebar
