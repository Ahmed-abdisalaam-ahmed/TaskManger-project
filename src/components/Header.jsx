import React, { useState } from "react";
import { SiTask } from "react-icons/si";
import { useTheme } from "./ThemeProvider"
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="relative top-1 max-w-6xl mx-auto border-2 rounded-full border-gray-300 dark:border-gray-700 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="flex justify-between h-16">
          <div className="flex items-center ">
            <Link to="/" className="flex items-center gap-2">
              <SiTask className="text-3xl text-gray-700 dark:text-blue-400" />
              <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                SwiftTask
              </span>
            </Link>

            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-xl text-gray-700 dark:text-gray-300">
                Home
              </Link>
              <Link to="about" className="text-xl text-gray-700 dark:text-gray-300">
                About
              </Link>
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
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                <span>hello, Ahmed</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 rounded-full p-1">
                <Link to="/login" className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                  Login
                </Link>
                <Link to="/register" className="px-4 py-2 text-sm bg-gray-800 dark:bg-blue-600 text-white rounded-full">
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