import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e213675b'

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Nigeria');

    }, []);

    return (
        <div className="app">
            <h1>MovieLife</h1>

            <div className="search">
                <input value="Nigeria Movie" onChange={() => {}} />
                <img src={SearchIcon} alt='search'/>
            </div>
        </div>
    )
}
export default App;