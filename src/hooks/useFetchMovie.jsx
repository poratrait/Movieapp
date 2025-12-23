import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL || "https://api.themoviedb.org/3";

/**
 * Custom Hook to fetch movies from TMDB
 * @param {string} endpoint - TMDB API endpoint (e.g. /movie/popular)
 * @param {object} params - extra query params (optional)
 */
export default function useFetchMovies(endpoint, params = {}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(`${BASE_URL}${endpoint}`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            ...params,
          },
        });

        setMovies(response.data.results || []);
      } catch (err) {
        setError("Failed to fetch movies");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [endpoint, JSON.stringify(params)]);

  return { movies, loading, error };
}
export const fetchMoviesByCategory = (category = "popular", page = 1) =>
  axios.get(`${BASE_URL}/movie/${category}`, {
    params: { api_key: API_KEY, language: "en-US", page },
  });

export const fetchMoviesByGenre = (genreId, page = 1) =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: { api_key: API_KEY, with_genres: genreId, page },
  });
 