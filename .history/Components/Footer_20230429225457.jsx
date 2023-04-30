import React from "react";


const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
    "mikewoods.km@gmail.com",
    "info@example.com",
    "Contact Us",
  ];
  const usefullLink = ["Home", "About Us", "Company Bio"];
  return (
    <footer class="text-center text-white backgroundMain lg:text-left" >
      <div class="container p-4 pb-0 mx-auto mt-5">
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-4 lg:w-1/4 md:w-1/2">
            <h5 class="mb-4 font-bold text-white">Products</h5>
            <ul class="mb-4 text-white">
              {productList.map((item) => (
                <li class="mt-2">
                  <a href="#" class="hover:text-gray-800">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div class="w-full px-4 lg:w-1/4 md:w-1/2">
            <h5 class="mb-4 font-bold text-white">Useful Links</h5>
            <ul class="mb-4 text-white">
              {usefullLink.map((item) => (
                <li class="mt-2">
                  <a href="#" class="hover:text-gray-800">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </footer>
  )
}