import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-gray-900 dark:bg-gray-100 p-4 flex justify-between items-center text-white dark:text-gray-900">
      
      {/* Logo / App Name */}
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        MovieApp
      </h1>

      {/* Search + Theme Toggle */}
      <div className="flex items-center gap-4">
        <SearchBar />

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-3 py-1 rounded transition-colors"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      
    </header>
  );
}
