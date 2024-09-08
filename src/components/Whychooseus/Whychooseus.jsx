import React from 'react';
import { FaBus } from 'react-icons/fa'; // This import is present but unused, so you can remove it if not needed
import img1 from "../../assets/heroBg.png"
function Whychooseus() {
  return ( // Added return statement
    <div className="p-4 font-[sans-serif]">
      <div className="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-12 text-center leading-10">
            Stay updated with the latest blog posts.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          <div className="bg-white rounded overflow-hidden">
            <img
              src="https://readymadeui.com/images/food.webp"
              alt="Blog Post 1"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Dolor</h3>
              <p className="text-gray-500 text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...
              </p>
              <p className="text-gray-800 text-[13px] font-semibold mt-4">08 April 2024</p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-white rounded overflow-hidden">
            <img
              src= "img1"
              alt="Blog Post 2"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Consectetur Adipiscing</h3>
              <p className="text-gray-500 text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...
              </p>
              <p className="text-gray-800 text-[13px] font-semibold mt-4">08 April 2024</p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-white rounded overflow-hidden">
            <img
              src="https://readymadeui.com/images/food22.webp"
              alt="Blog Post 3"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Sit Amet</h3>
              <p className="text-gray-500 text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...
              </p>
              <p className="text-gray-800 text-[13px] font-semibold mt-4">08 April 2024</p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-white rounded overflow-hidden">
            <img
              src="https://readymadeui.com/images/food33.webp"
              alt="Blog Post 4"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Sit Amet</h3>
              <p className="text-gray-500 text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...
              </p>
              <p className="text-gray-800 text-[13px] font-semibold mt-4">08 April 2024</p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-white rounded overflow-hidden">
            <img
              src="https://readymadeui.com/images/food44.webp"
              alt="Blog Post 5"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Sit Amet</h3>
              <p className="text-gray-500 text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...
              </p>
              <p className="text-gray-800 text-[13px] font-semibold mt-4">08 April 2024</p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-white rounded overflow-hidden">
            <img
              src="https://readymadeui.com/images/food55.webp"
              alt="Blog Post 6"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Sit Amet</h3>
              <p className="text-gray-500 text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...
              </p>
              <p className="text-gray-800 text-[13px] font-semibold mt-4">08 April 2024</p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychooseus;
