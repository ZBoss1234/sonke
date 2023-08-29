import Typed from "react-typed";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Hero.css";

import profile from "../assets/profile.png";

const Hero = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" min-h-screen">
      <div className="flex justify-between md:justify-center sfpro items-center h-14 max-w-[1240px] mx-auto px-4 text-black text-md">
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
        <div onClick={handleNav} className="block md:hidden">
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
          <li className="p-4 border-b border-gray-600">
            <a href="https://www.youtube.com/@soenkevenjacob/featured">
              My Youtube Channel
            </a>
          </li>
        </ul>
      </div>
      <div
        className="flex flex-col md:flex-row md:items-start justify-center items-center px-4 py-12 mt-20 md:mt-0 h-screen"
        id="header"
      >
        <div
          className="flex flex-col md:flex-row md:items-center justify-center px-4 py-12"
          id="header"
        >
          <div className="p-4 text-center md:text-left md:w-1/2 group flex justify-center items-center">
            <img
              src={profile}
              alt="sonke"
              className="custom-rounded shadow-xl shadow-[#979797] max-w-full h-auto"
            />
          </div>
          <div className="md:w-[50%] md:y-[50%] md:order-first text-center md:text-center md:mt-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl sfpro font-semibold mb-4">
              Sönke Venjacob
            </h1>
            <div className="mb-6">
              <p className="md:text-3xl sm:text-2xl text-xl sfpro font-semibold text-[#979797]">
                I help men
              </p>
              <Typed
                className="md:text-3xl sm:text-2xl text-xl sfpro font-bold md:pl-4 p-2 text-[#979797]"
                strings={[
                  "better their health",
                  "remove bad habits",
                  "improve their fitness",
                  "attract the right women",
                  "find their purpose",
                ]}
                typeSpeed={100}
                backSpeed={80}
                loop
              />
            </div>
            <button
              onClick={() =>
                (window.location.href =
                  "https://calendly.com/soenkevenjacob/discoverycall?month=2023-08")
              }
              className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md  text-lg font-medium transition duration-300"
            >
              Book Discovery Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
