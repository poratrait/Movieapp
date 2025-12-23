import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import * as api from "../api/tmdbApi";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    api.fetchTrending().then(res => setTrending(res.data.results));
    api.fetchPopular().then(res => setPopular(res.data.results));
    api.fetchTopRated().then(res => setTopRated(res.data.results));
  }, []);

  const searchMovies = async (query) => {
    if (!query) return;
    const res = await api.searchMovies(query);
    setSearchResults(res.data.results);
  };

  return (
    <MovieContext.Provider value={{
      trending, popular, topRated, selectedMovie, setSelectedMovie, searchResults, searchMovies
    }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
