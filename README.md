# Movie App

A modern Movie Recommendation Web Application built using React and TMDB API.
This application allows users to browse trending movies, search for movies, and view detailed information including posters, cast, trailers,
and similar movies.

## KEY FEATURES
- Browse Trending, Popular & Top Rated movies
- Search movies by title
- View detailed movie information
    .Poster & backdrop
    .Overview & ratings
    .Release date & runtime
- Cast section with actor images
- Watch movie trailers (YouTube embed)
- Sort movies by popularity, rating, etc.

### Tech Stack
- Frontend: React + Vite
- Styling: Tailwind CSS
- State Management: Context API
- API: The Movie Database(TMDB)
- Routing: React Router DOM

#### Project Structure
```movielastry/
  │
  ├── my-project/
  │   ├── node_modules/
  │   ├── public/
  │   │   └── index.html
  │   │
  │   ├── src/
  │   │   ├── api/
  │   │   │   └── tmdbApi.js
  │   │   │
  │   │   ├── assets/
  │   │   │   └── react.svg
  │   │   │
  │   │   ├── components/
  │   │   │   ├── CategoryBar.jsx
  │   │   │   ├── Footer.jsx
  │   │   │   ├── GenreFilter.jsx
  │   │   │   ├── Header.jsx
  │   │   │   ├── Loader.jsx
  │   │   │   ├── MovieCard.jsx
  │   │   │   ├── MovieList.jsx
  │   │   │   ├── SearchBar.jsx
  │   │   │   └── SortDropdown.jsx
  │   │   │
  │   │   ├── constants/
  │   │   │   ├── categories.js
  │   │   │   └── sortOptions.js
  │   │   │
  │   │   ├── context/
  │   │   │   ├── MovieContext.jsx
  │   │   │   └── ThemeContext.jsx
  │   │   │
  │   │   ├── hooks/
  │   │   │   └── useFetchMovie.jsx
  │   │   │
  │   │   ├── pages/
  │   │   │   ├── Home.jsx
  │   │   │   ├── MovieDetails.jsx
  │   │   │   └── SearchResults.jsx
  │   │   │
  │   │   ├── App.jsx
  │   │   ├── main.jsx
  │   │   ├── index.css
  │   │   └── index.html
  │   │
  │   ├── .env
  │   ├── .gitignore
  │   ├── eslint.config.js
  │   ├── package.json
  │   ├── package-lock.json
  │   ├── tailwind.config.js
  │   ├── vite.config.js
  │   └── README.md ```


##### Installation & Setup
1. Clone the repositpory
git clone https://github.com/poratrait/Movieapp.git

2. Install dependencies
cd movielasttry
npm install

4. Create .env file
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_BEARER_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTczMzAyZTlkN2ZiZGViZWM0YjNkZTUwZmE5NzViYiIsIm5iZiI6MTc2NTQ0MTI1OC41NjksInN1YiI6IjY5M2E3ZWVhOTNkYmJkMzMyNWI4M2ZjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.woW_jbiJFPr5HMFvsLGAdtdmO5izSGa8fwbTZvid8vk

5. Run the project
npm run dev

######Configuration Options
This project is set up using Vite and Tailwind CSS, with configurations managed through vite.config.js and tailwind.config.js and the project uses environment varibles for API integration(e.g,TMDB API Key) via a .env file.


















