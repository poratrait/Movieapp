import axios from "axios";

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

const tmdb = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
    accept: "application/json",
  },
  params: {
    language: "en-US",
  },
});

/* ===================== MOVIE LISTS ===================== */

export const fetchTrending = (page = 1) =>
  tmdb.get("/trending/movie/week", { params: { page } });

export const fetchPopular = (page = 1) =>
  tmdb.get("/movie/popular", { params: { page } });

export const fetchTopRated = (page = 1) =>
  tmdb.get("/movie/top_rated", { params: { page } });

/* ===================== MOVIE DETAILS ===================== */

export const fetchMovieDetails = (id) =>
  tmdb.get(`/movie/${id}`, {
    params: {
      append_to_response: "videos,credits,similar",
    },
  });

/* ===================== SEARCH ===================== */

export const searchMovies = (query, page = 1) =>
  tmdb.get("/search/movie", {
    params: {
      query,
      page,
      include_adult: false,
    },
  });

/* ===================== DISCOVER ===================== */

export const discoverMovies = (page = 1) =>
  tmdb.get("/discover/movie", {
    params: {
      include_adult: false,
      include_video: false,
      sort_by: "popularity.desc",
      page,
    },
  });

export const fetchMovieVideos = (id) =>
  tmdb.get(`/movie/${id}/videos`);

export const fetchSortedMovies = (sortBy = "popularity.desc", page = 1) =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: { api_key: API_KEY, sort_by: sortBy, language: "en-US", page },
  });

export const fetchGenres = () =>
  axios.get(`${BASE_URL}/genre/movie/list`, { params: { api_key: API_KEY } });


