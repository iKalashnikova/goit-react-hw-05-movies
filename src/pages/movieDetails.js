import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

const MovieDetails = () => {
  const location = useLocation();
  const BackLinkLocation = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTM5NjE1NGQ2YzQ3ODZkNWQ1YmUyMTI5OWEyZmUzNiIsInN1YiI6IjY0NmY5N2IyNzcwNzAwMDExOTI0MWFkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZAuKwEvcInwBmcDArKOc8GXVez8PoE95w65xznuwwg',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(data => setMovieDetails(data))
      .catch(error => console.error(error));
  }, [movieId]);

  const { title, rating, overview } = movieDetails || {};;

  return (
    <div>
      <Link to={BackLinkLocation}>Повернутись назад</Link>
      <img src="#" alt="#" />
      <h2>Назва фільму: {title} </h2>
          <p>рейтинг { rating}</p>
      <h3> Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>жанри</p>
      <div>
        {' '}
        <h5>Additional information</h5>
        <ul>
          <li>
            {' '}
            <Link to="Cast">Cast</Link>
          </li>
          <li>
            <Link to="Reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
