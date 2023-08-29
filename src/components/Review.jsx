import React from "react";
import { AiFillStar } from "react-icons/ai";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";

const Review = () => {
  return (
    <div className="bg-[#F5F5F7] flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          What My Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Review 1 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex items-center mb-4">
              <img
                src={user1} // Replace with user's image
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  Benjamin Parker
                </h3>
                <div className="flex items-center mt-1">
                  {/* React-icons for stars */}
                  <span className="text-blue-500 flex">
                    {/* React-icons for star */}
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              "Sönke Venjacob's 'Life Mastery For Men' isn't your usual
              self-help. His approach is real and relatable. It's like he's been
              in our shoes. The course is a refreshing take on personal growth."
            </p>
          </div>

          {/* User Review 2 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex items-center mb-4">
              <img
                src={user2} // Replace with user's image
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  Ethan Sullivan
                </h3>
                <div className="flex items-center mt-1">
                  {/* React-icons for stars */}
                  <span className="text-blue-500 flex">
                    {/* React-icons for star */}
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              "When I signed up for 'Life Mastery For Men,' I wasn't sure. But
              the content impressed me. Practical and genuine insights that
              Snoke shares make a lot of sense in real life."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
