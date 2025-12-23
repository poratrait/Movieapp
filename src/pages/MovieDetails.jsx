import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchMovieVideos } from "../api/tmdbApi";
import Loader from "../components/Loader";

const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetchMovieDetails(id),
      fetchMovieVideos(id),
    ])
      .then(([detailsRes, videosRes]) => {
        const trailer = videosRes.data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );

        setMovie({
          ...detailsRes.data,
          cast: detailsRes.data.credits?.cast || [],
        });

        setTrailerKey(trailer ? trailer.key : null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (!movie) return null;

  return (
    <div
      className="relative min-h-screen text-white bg-black overflow-hidden"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url(${IMAGE_BASE}${movie.backdrop_path})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-10">

          {/* Poster */}
          {movie.poster_path && (
            <img
              src={`${IMAGE_BASE}${movie.poster_path}`}
              alt={movie.title}
              className="w-64 rounded-lg shadow-lg"
            />
          )}

          {/* Movie Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            <p className="text-gray-300 mb-4 max-w-2xl">
              {movie.overview}
            </p>

            <p className="mb-2">⭐ Rating: {movie.vote_average}</p>
            <p className="mb-2">🎬 Release Date: {movie.release_date}</p>
            <p className="mb-2">⏱ Runtime: {movie.runtime} min</p>

            {/* Cast */}
            {movie.cast.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Cast</h2>

                <div className="flex gap-4  pb-2">
                  {movie.cast.map((actor) => (
                    <div
                      key={actor.id}
                      className="min-w-[100px] text-center flex-shrink-0"
                    >
                      <img
                        src={
                          actor.profile_path
                            ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                            : "https://via.placeholder.com/150"
                        }
                        alt={actor.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                      <p className="text-sm mt-2">{actor.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            

          </div>
        </div>
        {/* Trailer */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-4">Trailer</h2>

              {trailerKey ? (
                <div className="aspect-video max-w-2xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="Movie Trailer"
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  />
                </div>
              ) : (
                <p className="text-gray-400">Trailer not available.</p>
              )}
            </div>
      </div>
      
    </div>
    
  );
}
