import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between md:justify-center sfpro items-center h-24 max-w-[1240px] mx-auto px-4 text-black text-md">
      <ul className="hidden md:flex">
        <li className="p-4 my-custom-under">
          <a href="#header">Home</a>
        </li>
        <li className="p-4 my-custom-under">
          <a href="#header">About Me</a>
        </li>
        <li className="p-4 my-custom-under">
          <a href="https://www.youtube.com/@soenkevenjacob/featured">
            My YouTube Channel
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden ">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed right-0 top-0 w-[60%] h-full border-r border-r-gray-200 bg-[#979797] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li className="p-4 border-b border-gray-600">
          <a href="#header">Home</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="#header">About Me</a>
        </li>
        <li className="p-4 baorder-b border-gray-600">
          <a href="https://www.youtube.com/@soenkevenjacob/featured">
            My Youtube Channel
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
