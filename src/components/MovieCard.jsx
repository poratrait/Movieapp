import React from "react";

export default function MovieCard({ movie, onClick }) {
  return (
    <div
      onClick={() => onClick(movie)}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform cursor-pointer"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-2 text-white">
        <h3 className="font-semibold text-sm">{movie.title}</h3>
        <p className="text-xs text-gray-400">{movie.release_date}</p>

        {/* Actors */}
        {movie.cast && (
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {movie.cast.map((actor) => (
              <img
                key={actor.id}
                src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                alt={actor.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
