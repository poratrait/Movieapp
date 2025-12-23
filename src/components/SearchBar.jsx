import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../context/MovieContext";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { searchMovies } = useMovies();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    searchMovies(query);
    navigate("/search");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-3 py-2 rounded-l bg-gray-800 text-white outline-none w-48 md:w-64"
      />
      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 rounded-r text-white hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}
