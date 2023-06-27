import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e213675b'



const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Nigeria');
    }, []);

    return (
        <div className="app">
            <h1>MovieLife</h1>

           

            <div className="search">
                <input placeholder='Search for Movies' 
                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <img src={SearchIcon} 
                alt='search' onClick={() => searchMovies(searchTerm)}
                />
            </div>
             {
                movies?.length > 0 ?
                ( 
                   <div className='container'>
                     {movies.map((movie) => (
                        <MovieCard movie={movie} />
                     ))}
                   </div> 
                 ) : (
                    <div className='Empty'>
                        <h2>No Movie Found</h2>
                    </div>
                 )
            }
            
        </div>
    )
}
export default App;