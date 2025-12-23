import React from "react";
function GenreFilter({ genres, selectedGenre, onSelectGenre }) {
  return (
    <div className="flex gap-2 overflow-x-auto p-2">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onSelectGenre(genre.id)}
          className={`px-3 py-1 rounded ${
            selectedGenre === genre.id ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}
