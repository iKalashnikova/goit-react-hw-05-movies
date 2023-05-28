import { Link, useSearchParams, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import {SearchContainer, InputEl, ButtonEl, ResultsList, ListItem, LinkStyled} from './movies.styled'

const Movies = () => {
    // useState
    const [searchParams, setSearchParams] = useSearchParams();
    const [movie, setMovie] = useState(searchParams.get('movie') ?? '');
    // const movie = searchParams.get('movie') ?? '';
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    //  const [savedMovieList, setSavedMovieList] = useState([]);
    const location = useLocation();

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
                .then(data => {
                    setSearchResults(data.results);
                    // setSavedMovieList(data.results);
                })
    .catch(err => console.error(err));
        
            setIsSearching(false);
            setMovie('');
}
     }, [movie, isSearching]);
    
   
    

    const handleSearch = () => {
    setSearchParams({ movie });
        setIsSearching(true);
  };
    
//     const updateQueryString = evt => {
//         if(evt.target.value === ''){
//             return setSearchParams({}); 
//         }
//         setSearchParams({ movie: evt.target.value });
//   };
    
    const updateQueryString = evt => {
    const value = evt.target.value;
    setMovie(value);
    if (value === '') {
      setSearchParams({});
    }
    };
    
    return (<SearchContainer>
        <InputEl
            type='text'
            value={movie}
            onChange={updateQueryString} />
        <ButtonEl onClick={handleSearch}>Search</ButtonEl>
       
        <ResultsList>
  {searchResults.map(movie => (
    <ListItem key={movie.id}>
      <LinkStyled to={`${movie.id}`} state={{ from: location }}>{movie.title}</LinkStyled>
    </ListItem>
  ))}
</ResultsList>
    </SearchContainer>)
        
}

export default Movies;