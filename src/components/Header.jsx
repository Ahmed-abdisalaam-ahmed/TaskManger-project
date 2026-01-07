import React, { useState } from "react";
import { Link } from "react-router";
import { SiTask } from "react-icons/si";
import { div } from "motion/react-client";
import { BsMoonStarsFill } from "react-icons/bs";
// import { div } from 'motion/react-client';

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <header className="bg-gray-50">
      <div className="max-w-6xl mt-4 mx-auto border-2 rounded-full border-gray-300 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* left and right */}

          {/* left */}
          <div className="flex">
            {/* logo */}
            <>
              <Link to="/" className="flex items-center gap-2">
                <SiTask className="text-3xl text-gray-700" />
                <span className="text-xl sm:text-2xl font-bold text-gray-800">
                  SwiftTask
                </span>
              </Link>
            </>

            {/* left  */}
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="">
                Home
              </Link>
              <Link to="about" className="">
                About
              </Link>
            </nav>
          </div>

          {/* right */}
          <div className="flex">
            <div className="">
              <BsMoonStarsFill />
            </div>
            {isLoggedIn ? (
              <>
                {/* profile */}
                <div className="text-gray-500 text-sm">
                  <span>hello, {"Ahmed"}</span>
                </div>
                <div>

                </div>
              </>
            ) : (
            <div className="flex items-center gap-2 border border-gray-200 rounded-full p-1">
              <Link
                to="/login"
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 text-sm bg-gray-800 text-white rounded-full hover:bg-gray-900"
              >
                Register
              </Link>
            </div>

            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
