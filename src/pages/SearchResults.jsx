import React from "react";
import { useMovies } from "../context/MovieContext";
import MovieList from "../components/MovieList";
import { useNavigate } from "react-router-dom";

export default function SearchResults() {
  const { searchResults, setSelectedMovie } = useMovies();
  const navigate = useNavigate();

  const handleClick = (movie) => {
    setSelectedMovie(movie);
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search Results</h2>
      <MovieList movies={searchResults} onMovieClick={handleClick} />
    </div>
  );
}
