import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./contents/search.svg";
import axios from "axios";

const API_URL = "http://www.omdbapi.com/?apikey=e213675b";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title, e) => {
    // const response = await fetch(`${API_URL}&s=${title}`);
    // const data = await response.json();

    if (e?.key === `Enter`) {
      const { data } = await axios.get(`${API_URL}&s=${title}`);
      console.log(`Data from Enter key`, data);
      setMovies(data?.Search);
    } else if (e?.button === 0 || e?.button === 1) {
      const { data } = await axios.get(`${API_URL}&s=${title}`);
      console.log(`Data`, data);
      setMovies(data?.Search);
    }
  };

  //submitting with Enter Key
  //   const handleEnterKey = async (title, e) => {
  //     // e.preventDefault();
  //     if (e.key === `Enter`) {
  //       const { data } = await axios.get(`${API_URL}&s=${title}`);
  //       console.log(`Enter key data`, data);
  //     }
  //   };

  useEffect(() => {
    searchMovies("Nigeria");
  }, []);

  return (
    <div className="app">
      <h1>MovieLife</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => searchMovies(searchTerm, e)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={(e) => searchMovies(searchTerm, e)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="Empty">
          <h2>No Movie Found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
