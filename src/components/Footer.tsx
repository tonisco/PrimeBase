import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5"

import logo from "/images/logo.svg"

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-blue-600">
            <img
              src={logo}
              alt="Prime Base Logo"
              className="object-contain w-10 h-10"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Prime Base</h2>

                <p className="mt-4 text-gray-500">
                  Subscribe to our newsletter to get the latest information on
                  trends, policy changes and stay update on our latest blogs.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <div className="p-2 border border-gray-100 focus-within:ring focus-within:rounded-lg sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <button className="w-full px-6 py-3 mt-1 text-sm font-bold tracking-wide text-white uppercase transition-none bg-blue-500 hover:bg-blue-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Loans</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Personal Loan
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Education Loan
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Business Loan
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Car Loan
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Home Loan
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Accounts Review
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Accessibility
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Payback Policy
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Loan Policy
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Debt Consolidation
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Save and Invest</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Credit Cards
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Mortgages
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Lines of Credit
                  </a>
                </li>
              </ul>
            </div>

            <ul className="flex justify-start col-span-2 gap-6 lg:col-span-5 lg:justify-end">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <IoLogoFacebook className="w-6 h-6" />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <IoLogoInstagram className="w-6 h-6" />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <IoLogoTwitter className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-100">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              &copy; 2023. Prime Base. All rights reserved.
            </p>

            <ul className="flex flex-wrap justify-start gap-4 mt-8 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="/"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
