import './App.css';
import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL ="http://www.omdbapi.com?apikey=398e53e3" ;


const movie ={
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}

const App = ()  => {
  const[ movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&S=${title}`);
    const data = await response.json();

    setMovies(data.Search);
   }

  useEffect(() => {
    searchMovies('Spiderman')
  }, []);


  return (
      <div className='app'>
        <h1>AGENTPAT MOVIE SITE</h1>

        <div className='search'>
          <input 
            placeholder='search for movies'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt='search'
            onClick={() => searchMovies(searchTerm )}
          />
        </div>

        {
          movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
              <MovieCard movie={movie }/>
          </div>
          ) :
            (
              <div className='empty'>
                <h2>No movies found</h2>
              </div>
            )
        }

        
      </div>
  );
}

export default App;
