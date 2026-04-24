import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../assets/banner.png"; // ✅ your image

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // 🔍 SEARCH FUNCTION
  const searchMovies = async () => {
    if (!query.trim()) {
      setError("Enter movie name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 🔥 main key
      let res = await fetch(
        `https://www.omdbapi.com/?apikey=c9d23db4&s=${encodeURIComponent(query)}`
      );
      let data = await res.json();

      // 🔁 fallback key (important)
      if (data.Response === "False") {
        res = await fetch(
          `https://www.omdbapi.com/?apikey=thewdb&s=${encodeURIComponent(query)}`
        );
        data = await res.json();
      }

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || "No movies found");
      }
    } catch (err) {
      console.error(err);
      setError("Network error ❌");
    }

    setLoading(false);
  };

  return (
    <div>

      {/* 🎬 HERO BANNER */}
      {movies.length === 0 && (
        <div
          className="hero"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${banner})`
          }}
        >
          <div className="hero-content">
            <h1>🎬 UNDs Review System</h1>
            <p>
              Discover movies, explore details, and share your reviews.
            </p>
            <button
              onClick={() =>
                document.querySelector(".search input").focus()
              }
            >
              Start Exploring
            </button>
          </div>
        </div>
      )}

      {/* 🔍 SEARCH BAR */}
      <div className="search">
        <input
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchMovies()}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      {/* ⏳ LOADING */}
      {loading && <p style={{ textAlign: "center" }}>Loading... ⏳</p>}

      {/* ❌ ERROR */}
      {error && <p className="error">{error}</p>}

      {/* 🎥 MOVIE GRID */}
      <div className="grid">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="card"
            onClick={() => navigate(`/movie/${movie.imdbID}`)}
          >
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300"
              }
              alt={movie.Title}
            />
            <h3>{movie.Title}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;