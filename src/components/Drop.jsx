import React, { useState } from "react";
import { motion } from "framer-motion";

const DropdownAlert = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeAlert = () => {
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-[50%] transform sm:w-1/3 md:w-1/4 lg:w-1/5 bg-[#bebebe] p-4 rounded-lg shadow-md ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center">
        <p className="text-sm sm:text-base font-medium">
          My mentorship program is filling up!
        </p>
        <button
          onClick={closeAlert}
          className="text-black hover:text-black focus:outline-none"
        >
          X
        </button>
      </div>
      <div className="mt-2 text-center">
        <button className="bg-black hover:bg-white text-white py-1 px-3 rounded-md focus:outline-none">
          Book Discovery Call Now
        </button>
      </div>
    </motion.div>
  );
};

export default DropdownAlert;
