import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
    const { movieId } = useParams();
    const  [actors, setActors ] = useState([]);

    useEffect(() => {

        const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTM5NjE1NGQ2YzQ3ODZkNWQ1YmUyMTI5OWEyZmUzNiIsInN1YiI6IjY0NmY5N2IyNzcwNzAwMDExOTI0MWFkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZAuKwEvcInwBmcDArKOc8GXVez8PoE95w65xznuwwg'
  }
};

fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
  .then(response => response.json())
  .then(data => setActors(data.cast))
  .catch(err => console.error(err));
    },[movieId])
    
    return (
        <div>
            <ul>
                {actors.map(actor => (
                    <li key={actor.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
                        <p>Name: {actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cast;