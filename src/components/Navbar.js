import React from "react"
import "../styles/navbar.css"

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-center px-2 py-3 bg-white-500 mb-3 shadow-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full relative flex md:w-auto md:static md:block md:justify-center md:hidden">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block  outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <div className="container ">
              <a
                className=" flex items-center justify-center inline-block mr-4 py-2"
                href="#"
              >
                <img src="/Logo.png" alt="Logo" />
              </a>
            </div>
          </div>
          <div
            className={
              "md:flex md:flex-grow-0 items-center justify-center h-screen md:h-12 " +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
              <li className="nav active">
                <a
                  className="w-full font-semibold md:w-auto p-5 inline-block "
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav">
                <a
                  className="w-full font-semibold md:w-auto p-5 inline-block"
                  href="#"
                >
                  Products
                </a>
              </li>
              <li>
                <div className="container ">
                  <a
                    className=" flex items-center justify-center inline-block mx-16 py-2 hidden md:block"
                    href="#"
                  >
                    <img src="/Logo.png" alt="Logo" />
                  </a>
                </div>
              </li>
              <li className="nav">
                <a
                  className="w-full font-semibold md:w-auto p-5 inline-block "
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li className="nav">
                <a
                  className="w-full font-semibold md:w-auto p-5 inline-block"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
