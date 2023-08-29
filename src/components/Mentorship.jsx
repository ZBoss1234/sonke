import React from "react";
import border from "../assets/banner.jpg";
import { Checkmark } from "react-checkmark";

const Mentorship = () => {
  const features = [
    "YOUR PURPOSE (based on your interests, skills & personality).",
    "BUILDING HEALTHY HABITS (to quit bad habits like porn to turn into good habits like reading books instead).",
    "WEEKLY 1:1 CALLS (so we can analyze what’s working well and double down on it for increased results and inquiries).",
    "10 WEEKS PROGRAM (with a specific approach personalized for your strengths).",
    "BUILDING DISCIPLINE (to maximize the ROI of your own time in this coaching).",
    "NUTRITION AND WORKOUT PLAN (so you just start getting in shape right away).",
    "24-HOUR SUPPORT AT YOUR FINGERTIPS (for accountability, as well as to ask questions and discuss ideas for further growth and success).",
  ];

  return (
    <div className="bg-[#F5F5F7] min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl w-full  my-[5rem]">
        <div className="mb-6">
          {/* Placeholder image */}
          <img
            src={border} // Replace with your actual image source
            alt="Masculine Mastery"
            className="w-full rounded-t-lg"
          />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Introducing
        </h3>
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Masculine Mastery
        </h2>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <div className="bg-green-500 w-4 h-4 rounded-full flex items-center justify-center">
                <Checkmark size="small" />
              </div>
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-gray-200 pt-6 text-sm text-gray-600">
          <p>
            Get ready to embark on a journey of personal growth and development.
          </p>
          <p>
            Experience transformation through tailored coaching and support.
          </p>
        </div>
        <a href="https://calendly.com/soenkevenjacob/discoverycall?month=2023-08">
          <button className="mt-6 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-base font-medium transition duration-300">
            Start Your Journey
          </button>
        </a>
      </div>
    </div>
  );
};

export default Mentorship;
