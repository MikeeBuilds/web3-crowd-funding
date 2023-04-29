import React, { useState, useContext } from "react";

//INTERNAL IMPORT 
import { CrowdFundingContext } from "@/Context/CrowdFunding";
import Logo from "@/Components/Logo";
import Menu from "./Menu";

const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuList = ["white Paper", "Project", "Donation", "Members"];

  return (
    <div className="backgroundMain">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <Logo color="text-white" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                BLOCK FUND
              </span>
            </a>
            <ul className="items-center hidden space-x-8 lg:flex">
              {menuList.map((el, i) => (
                <li key={i + 1} className="inline-block mr-8">
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {!currentAccount && (
            <ul className="items-center hidden space-x-8 lg:flex">
              <li className="inline-block">
                <button
                  onClick={() => connectWallet()}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-500 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="sign up"
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          )}

          <div className="lg:hidden z-40">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>

            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-40">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items justify-between mb-4">
                    <div className="inline-flex items-center">
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <Logo color="text-gray-900" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          BLOCK FUND
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray
          hover:text-gray-900" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M18.292 19.708a1 1 0 0 1-1.414 0L12 13.414l-4.292 4.292a1 1 0 1 1-1.414-1.414L10.586
                              12 6.293 7.708a1 1 0 0 1 1.414-1.414L12 10.586l4.292-4.292a1 1 0 0
                              1 1.414 1.414L13.414 12l4.292 4.292a1 1 0 0 1 0 1.416z"
                            ></path>
                          </svg>
                        </button> 
                        </div>
                        </div>
                        </div>
                </div>
            </div>
          </div>
        </div>
      </div> 
    )
}


export default NavBar




