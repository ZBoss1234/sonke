import React from "react";
import newsletterBackground from "../assets/world.jpg"; // Replace with actual image source

const Newsletter = () => {
  return (
    <section className="bg-[#F5F5F7] py-[5rem]">
      <div className="mx-4 md:mx-auto max-w-screen-md relative overflow-hidden rounded-lg shadow-xl bg-white">
        <img
          src={newsletterBackground}
          alt="Newsletter Background"
          className="w-full h-64 md:h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <a
            href="https://soenkevenjacob.ck.page/newsletter" // Replace with your actual newsletter link
            className="block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Join My Newsletter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
