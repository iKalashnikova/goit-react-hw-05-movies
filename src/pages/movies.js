import { Link, useSearchParams, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

const Movies = () => {
    // useState
    const [searchParams, setSearchParams] = useSearchParams();
    const movie = searchParams.get('movie') ?? '';
    const [searchResults, setSearchResults] = useState([]);
     const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if (isSearching) {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTM5NjE1NGQ2YzQ3ODZkNWQ1YmUyMTI5OWEyZmUzNiIsInN1YiI6IjY0NmY5N2IyNzcwNzAwMDExOTI0MWFkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZAuKwEvcInwBmcDArKOc8GXVez8PoE95w65xznuwwg'
                }
            };

            fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${movie}`, options)
                .then(response => response.json())
                .then(data => setSearchResults(data.results))
                .catch(err => console.error(err));
        
            setIsSearching(false);
        }
     }, [movie, isSearching]);
    
    const location = useLocation();

    const handleSearch = () => {
    setSearchParams({ movie });
    setIsSearching(true);
  };


    
    const updateQueryString = evt => {
        if(evt.target.value === ''){
            return setSearchParams({}); 
        }
        setSearchParams({ movie: evt.target.value });
  };
    
    return <div>
        <input
            type='text'
            value={movie}
            onChange={updateQueryString} />
        <button onClick={handleSearch}>Search</button>
       
        <ul>
  {searchResults.map(movie => (
    <li key={movie.id}>
      <Link to={`${movie.id}`} state={{ from: location }}>{movie.title}</Link>
    </li>
  ))}
</ul>
    </div>
        
}

export default Movies;