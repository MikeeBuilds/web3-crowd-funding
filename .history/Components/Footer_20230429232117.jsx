import React from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
    "mikewoods.km@gmail.com",
    "info@example.com",
    "Contact Us",
  ];
  const usefulLink = ["Home", "About Us", "Company Bio"];

  return (
    <footer className="text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex items-center uppercase font-semibold text-white md:justify-start">
              Algo Hussle
            </h6>
            <p className="text-white">
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              necessitatibus incidunt ut officiis explicabo inventore.
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex items-center uppercase font-semibold text-white md:justify-start">
              Product
            </h6>
            <ul className="text-white">
              {productList.map((el, i) => (
                <li className="mb-4" key={i + 1}>
                  <a href="#!">{el}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="mb-4 flex items-center uppercase font-semibold text-white md:justify-start">
              Useful Links
            </h6>
            <ul className="text-white">
              {usefulLink.map((el, i) => (
                <li className="mb-4" key={i + 1}>
                  <a href="#!">{el}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="mb-4 flex items-center uppercase font-semibold text-white md:justify-start">
              Contact
            </h6>
            <ul className="text-white">
              {contactList.map((el, i) => (
                <li className="mb-4" key={i + 1}>
                  <a href="#!">{el}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="backgroundMain p-6 text-center">
        <span>© 2023 Copyright:</span>
        <a className="font-semibold" href="https://tailwind-elements.com">
          Algo Hussle
        </a>
      </div>
    </footer>
  );
};

export default Footer;
