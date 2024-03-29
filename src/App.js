import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./contents/search.svg";
import LoadingIcon from "./contents/loading.gif";

const API_URL = "http://www.omdbapi.com/?apikey=e213675b";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showLoadingSymbol, setShowLoadingSymbol] = useState(false);
  const [counter, setCounter] = useState(2);

  const searchMovies = async (title, e) => {
    if (e?.key === `Enter`) {
      setShowLoadingSymbol(true);
      const { data } = await axios.get(`${API_URL}&s=${title}`);
      console.log(`Data from Enter key`, data);
      setMovies(data?.Search);
      setShowLoadingSymbol(false);
    } else if (e?.button === 0 || e?.button === 1) {
      setShowLoadingSymbol(true);
      const { data } = await axios.get(`${API_URL}&s=${title}`);
      console.log(`Data`, data);
      setMovies(data?.Search);
      setShowLoadingSymbol(false);
    } else {
      return;
    }
  };
  useEffect(() => {
    searchMovies("Nigeria");
  }, []);

  const showMoreItems = async (title) => {
    setCounter(counter + 1);
    console.log(counter);
    setShowLoadingSymbol(true);
    const { data } = await axios.get(`${API_URL}&s=${title}&page=${counter} `);
    console.log(`More pages`, data);
    setMovies(data?.Search);
    setShowLoadingSymbol(false);
  };

  //submitting with Enter Key
  //   const handleEnterKey = async (title, e) => {
  //     // e.preventDefault();
  //     if (e.key === `Enter`) {
  //       const { data } = await axios.get(`${API_URL}&s=${title}`);
  //       console.log(`Enter key data`, data);
  //     }
  //   };

  //    useEffect(() => {
  //      const listener = (event) => {
  //        if (event.code === "Enter" || event.code === "NumpadEnter") {
  //          console.log("Enter key was pressed. Run your function.");
  //          event.preventDefault();
  //          // callMyFunction();
  //        }
  //      };
  //      document.addEventListener("keydown", listener);
  //      return () => {
  //        document.removeEventListener("keydown", listener);
  //      };
  //    }, []);

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
          {movies.map((movie, key) => (
            <MovieCard movie={movie} key={key} />
          ))}
        </div>
      ) : (
        <div className="Empty">
          <h2>No Movie Found</h2>
        </div>
      )}
      {movies?.length > 0 && (
        <button
          onClick={() => showMoreItems(searchTerm)}
          style={{ padding: `20px`, margin: `20px`, fontSize: `16px` }}
        >
          Show More
        </button>
      )}
      {showLoadingSymbol && (
        <div
          style={{
            padding: `20px`,
            margin: `20px`,
            backgroundColor: `whitesmoke`,
            borderRadius: `50%`,
          }}
        >
          <img src={LoadingIcon} alt="Loading Icon" />
        </div>
      )}
    </div>
  );
};
export default App;
