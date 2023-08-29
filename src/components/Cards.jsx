import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

import image1 from "../assets/sonke1.png";
import image2 from "../assets/sonke2.png";
import image3 from "../assets/sonke3.png";
import image4 from "../assets/sonke4.png";

const features = [
  "3 years ago, my life sucked.",
  "I was not in shape.",
  "I didn't have confidence around women.",
  "I didn't have a purpose.",
];

const images = [image2, image1, image4, image3];

const FeatureTitle = ({ children, index, setActiveIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  if (isInView) {
    setActiveIndex(index);
  }

  return (
    <div className="text-2xl sm:text-3xl md:text-4xl py-16 sfpro font-semibold text-center">
      <p
        ref={ref}
        className={
          "py-16 text-2xl sm:text-3xl md:text-4xl transition-colors " +
          (isInView ? "text-black" : "text-gray-300")
        }
      >
        {children}
      </p>
    </div>
  );
};

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="mx-auto max-w-6xl px-4 sfpro">
      <div className="mt-[5rem]">
        {/* <h1 className="mx-auto border-black rounded-lg p-2 md:w-[60%] w-full text-center border-2 lg:text-4xl md:text-3xl sm:text-2xl text-xl sfpro font-semibold">
          My Journey to Self-Mastery:
        </h1> */}
      </div>
      <div className="flex w-full items-start gap-20">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <FeatureTitle index={index} setActiveIndex={setActiveIndex}>
                  {feature}
                </FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square w-full rounded-2xl bg-gray-100 rounded-[20%]">
            {activeIndex !== -1 && (
              <motion.img
                src={images[activeIndex]}
                alt={`test ${activeIndex + 1}`}
                className="w-full h-full object-cover"
                style={{ borderRadius: "10%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
