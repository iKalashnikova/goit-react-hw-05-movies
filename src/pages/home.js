import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTM5NjE1NGQ2YzQ3ODZkNWQ1YmUyMTI5OWEyZmUzNiIsInN1YiI6IjY0NmY5N2IyNzcwNzAwMDExOTI0MWFkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZAuKwEvcInwBmcDArKOc8GXVez8PoE95w65xznuwwg'
            }
        };
    
        
        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
            .then(response => response.json())
            .then(movie => setMovies(movie.results))
            .catch(err => console.error(err));
    }, [])
    
 
    return (<div>
        
        <ul>{movies.map(movie => <li key={movie.id}>
            <Link
                to={`/movies/${ movie.id}`}
            >
              {movie.title}
            </Link></li>)}
        </ul>
    </div>
    )
}

export default Home;