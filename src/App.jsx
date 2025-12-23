import React from "react";
import { Routes, Route } from "react-router-dom"; // no BrowserRouter here
import { MovieProvider } from "./context/MovieContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./pages/SearchResults";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MovieProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </MovieProvider>
  );
}
