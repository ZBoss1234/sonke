import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";

import image1 from "../assets/shape.png";
import image2 from "../assets/girl.png";
import image3 from "../assets/profile.png";
import image4 from "../assets/life.jpg";

const features = [
  "This is my life now.",
  "I am in shape.",
  "I know how to attract high quality women.",
  "I know my purpose.",
];

const images = [image4, image1, image2, image3];

const FeatureTitle = ({ children, index, setActiveIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  if (isInView) {
    setActiveIndex(index);
  }

  return (
    <div className="text-2xl sm:text-3xl sfpro font-semibold md:text-4xl py-16 text-center">
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
    <div className="mx-auto max-w-6xl px-4 ">
      <div className="flex w-full items-start gap-20">
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square w-full rounded-2xl bg-gray-100 rounded-[20%]">
            {activeIndex !== -1 && (
              <img
                src={images[activeIndex]}
                alt={`test ${activeIndex + 1}`}
                className="w-full h-full object-cover"
                style={{ borderRadius: "10%" }} // Add this line for rounded corners
              />
            )}
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Cards;
