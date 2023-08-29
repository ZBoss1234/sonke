import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Young = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold as needed
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white sfpro">
      <div
        ref={ref}
        className="container mx-auto px-4 md:px-8 py-16 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-12"
        >
          ✨ Imagine This in Just 10 Weeks:
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
              className="border border-white rounded-lg p-6 hover:bg-white hover:bg-opacity-10 transition"
            >
              <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
              <p className="text-white">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 md:text-lg text-white"
        >
          Discover your true potential 🌟
          <br />
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          onClick={() =>
            (window.location.href =
              "https://calendly.com/soenkevenjacob/discoverycall?month=2023-08")
          }
          className="py-2 mt-6 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-lg font-medium transition duration-300"
        >
          Apply To The Mentorship
        </motion.button>
      </div>
    </div>
  );
};

const content = [
  {
    title: "Unveil Your Purpose 🎯",
    description: "Discover your life's purpose and direction.",
  },
  {
    title: "Magnetic Attraction 💃",
    description: "Have women naturally gravitate towards you.",
  },
  {
    title: "Peak Fitness 🏋️‍♂️",
    description: "Attain peak physical condition and feel amazing.",
  },
  {
    title: "Meaningful Bonds 🤝",
    description: "Foster deep and meaningful connections.",
  },
  {
    title: "Texting Mastery 📱",
    description: "Master the art of texting and connecting with women.",
  },
  {
    title: "Confidence & Power 🚀",
    description: "Radiate unshakable confidence and wield true power.",
  },
];

export default Young;
