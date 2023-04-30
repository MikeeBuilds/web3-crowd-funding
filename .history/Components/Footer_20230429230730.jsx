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
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="">
            <h6 class="mb-4 flex items-center uppercase font-semibold text-white ">Products</h6>
            