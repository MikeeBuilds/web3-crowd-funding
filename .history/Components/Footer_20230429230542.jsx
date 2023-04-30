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
            <h5 class="mb-4 items-center uppercase font-bold text-white">Products</h5>
            