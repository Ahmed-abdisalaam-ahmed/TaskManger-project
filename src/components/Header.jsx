import React, { useState } from "react";
import { SiTask } from "react-icons/si";
import { useTheme } from "./ThemeProvider";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
// import { div } from "motion/react-m";
import { FaUser } from "react-icons/fa";

const Header = () => {
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoggedIn, user, profile, logOut } = useAuth();
  const avatar_url = "";
  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md dark:bg-slate-950/80 transition-colors duration-300 py-2">
      <div className="max-w-6xl mx-auto border-2 rounded-full border-gray-300 dark:border-gray-700 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-14">
            <Link to="/" className="flex items-center gap-2">
              <SiTask className="text-3xl text-gray-600 dark:text-blue-400" />
              <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                SwiftTask
              </span>
            </Link>

            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Home
              </Link>
              <Link
                to="about"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                About
              </Link>

              {isLoggedIn && (
                <>
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    dashboard
                  </Link>
                </>
              )}
            </nav>
          </div>

          <div className="flex items-center">
            <div className="p-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                {/* Switch icons based on theme */}
                {theme === "dark" ? (
                  <Sun className="text-yellow-400" />
                ) : (
                  <Moon className="text-gray-700" />
                )}
              </button>
            </div>

            {isLoggedIn ? (
              <>
                <div className="text-gray-500 text-sm mx-2">
                  <span>hello, {profile?.username}</span>
                </div>
                <div className="relative">
                  <button
                    className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 focus:outline-0 focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <img
                      className="w-8 h-8 rounded-full "
                      src={
                        profile?.avatar_url || (
                          <FaUser className="text-slate-600" />
                        )
                      }
                    />
                  </button>

                  {/* Dropdown menu */}
                  {isDropdownOpen && (
                    <div
                      className="absolute right-0 w-48 mt-1 rounded-md shadow-lg bg-white z-10"
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      {/* <div className="absolute h-8 w-full"></div> */}
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Your Profile
                      </Link>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm  text-gray-700 hover:bg-gray-100"
                      >
                        {" "}
                        Dashboard
                      </Link>
                      <button
                        className="block px-4 py-2 text-left text-sm w-full cursor-pointer text-gray-700 hover:bg-red-600 hover:text-white "
                        onClick={logOut}
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 rounded-full p-1">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm bg-gray-800 dark:bg-blue-600 text-white rounded-full"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          {/* Hamberger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-4 right-4 bg-white dark:bg-slate-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl z-50 p-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  to="/"
                  className="text-lg font-medium dark:text-white"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  to="/about"
                  className="text-lg font-medium dark:text-white"
                >
                  About
                </Link>
                {isLoggedIn ? (
                  <>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      to="/dashboard"
                      className="text-lg font-medium dark:text-white"
                    >
                      Dashboard
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      to="/articles"
                      className="text-lg font-medium dark:text-white"
                    >
                      Articles
                    </Link>
                    <button
                      onClick={logOut}
                      className="text-left text-lg font-medium text-red-500"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      to="/login"
                      className="text-center py-2 rounded-xl border border-gray-300 dark:text-white"
                    >
                      Login
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      to="/register"
                      className="text-center py-2 rounded-xl bg-blue-600 text-white"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
