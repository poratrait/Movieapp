import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo / App Name */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white">MovieApp</h2>
            <p className="text-sm mt-1">
              Discover movies, trailers & recommendations
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/search" className="hover:text-white transition">Search</a>
            <a href="#" className="hover:text-white transition">Trending</a>
            <a href="#" className="hover:text-white transition">Top Rated</a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} MovieApp. All rights reserved.
          </p>

          {/* TMDB Credit */}
          <p className="text-xs text-gray-500 text-center">
            Powered by <span className="text-white">TMDB API</span>.  
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </p>

        </div>

      </div>
    </footer>
  );
}
