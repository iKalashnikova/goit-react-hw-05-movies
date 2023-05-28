import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  MovieDetailsContainer,
  MovieImage,
  Title,
  Rating,
  Overview,
  GenresList,
  GenreItem,
  AdditionalInfo,
  AdditionalInfoTitle,
  AdditionalInfoList,
  AdditionalInfoItem,
  MovieInfo,
  BackLink,
  DetailsContainer,
  DetailsTitle,
  AdditionalInfoLink
} from './details.styled';

const MovieDetails = () => {
  const location = useLocation();
  //   const BackLinkLocation = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

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

const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  const { title, vote_average, overview, genres, poster_path } =
    movieDetails || {};
const score = vote_average * 10;
  const scoreToFixed = score.toFixed(2);

  return (
    <MovieDetailsContainer>
      
        <BackLink to={location.state?.from ?? '/'}>Go Back</BackLink>
      <MovieInfo>
        <MovieImage>
          <img src={`http://image.tmdb.org/t/p/w400/${poster_path}`} alt="#" />
        </MovieImage>
        <DetailsContainer>
          <Title> {title} </Title>
          <Rating> User score: {scoreToFixed}%</Rating>
          <DetailsTitle> Overview</DetailsTitle>
          <Overview>{overview}</Overview>
          <DetailsTitle>Genres</DetailsTitle>
          {genres && (
            <GenresList>
              {genres.map(genre => (
                <GenreItem key={genre.id}>{genre.name}</GenreItem>
              ))}
            </GenresList>
          )}
        </DetailsContainer>
      </MovieInfo>
      <AdditionalInfo>
        <AdditionalInfoTitle>Additional Info</AdditionalInfoTitle>
        <AdditionalInfoList>
          <AdditionalInfoItem>
            <AdditionalInfoLink to="Cast" onClick={toggleAdditionalInfo}>Cast</AdditionalInfoLink>
          </AdditionalInfoItem>
          <AdditionalInfoItem>
            <AdditionalInfoLink to="Reviews" onClick={toggleAdditionalInfo}>Reviews</AdditionalInfoLink>
          </AdditionalInfoItem>
        </AdditionalInfoList>
        {showAdditionalInfo && <Outlet />}
      </AdditionalInfo>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
