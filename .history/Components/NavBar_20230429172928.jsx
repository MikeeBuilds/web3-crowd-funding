import React, { useState, useEffect, useContext } from "react"

//INTERNAL IMPORT 
import { CrowdFundingContext } from "@/Context/CrowdFunding";
import { Logo, Menu } from "../Components/index"


const NavBar = () => {
    const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuList = ["white Paper", "Project", "Donation", "Members"];
     return (
      <div class="backgroundMain">
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center"
            >
              <Logo />
            </a>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  White Paper
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Product pricing"
                  title="Product pricing"
                  class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Donation
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="About us"
                  title="About us"
                  class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Members
                </a>
              </li>
            </ul>
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu />
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full z-10">
                  <div class="p-5 bg-white border rounded shadow-sm">


                    
        </div>
      </div> 
    )
}


export default NavBar




