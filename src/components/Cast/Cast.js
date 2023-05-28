import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActorList, ActorItem, ActorImage, ActorName, ActorCharacter, CastContainer } from './Cast.styled'

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
        <CastContainer>
            <ActorList>
                {actors.length > 0
                ? actors.map(actor => (
                    <ActorItem key={actor.id}>
                        <ActorImage src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                } />
                        <ActorName>Name: {actor.name}</ActorName>
                        <ActorCharacter>Character: {actor.character}</ActorCharacter>
                    </ActorItem>
                ))
                    : "Sorry, there isn't any info :("
            }
            </ActorList>
        </CastContainer>
    );
};

export default Cast;