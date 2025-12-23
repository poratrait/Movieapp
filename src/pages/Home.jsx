import React from "react";
import { useMovies } from "../context/MovieContext";
import MovieList from "../components/MovieList";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { trending, popular, topRated } = useMovies();
  const navigate = useNavigate();

  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="p-4 space-y-8">
      

      {/* Trending Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Trending</h2>
        <MovieList movies={trending} onMovieClick={handleClick} />
      </section>

      {/* Popular Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Popular</h2>
        <MovieList movies={popular} onMovieClick={handleClick} />
      </section>

      {/* Top Rated Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Top Rated</h2>
        <MovieList movies={topRated} onMovieClick={handleClick} />
      </section>

    </div>
  );
}
