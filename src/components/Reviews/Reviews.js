import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ReviewContainer, Author, Content, ReviewList , ReviewItem} from './Reviews.styled'

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setRewiews] = useState([])


    useEffect(() => 
        {const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTM5NjE1NGQ2YzQ3ODZkNWQ1YmUyMTI5OWEyZmUzNiIsInN1YiI6IjY0NmY5N2IyNzcwNzAwMDExOTI0MWFkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZAuKwEvcInwBmcDArKOc8GXVez8PoE95w65xznuwwg'
  }
};

fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(data => setRewiews(data.results))
  .catch(err => console.error(err));}, [movieId])

    
      return (
          <ReviewContainer>
              <ReviewList>
                  {reviews.length>0
                ? reviews.map(review => (
                    <ReviewItem key={review.id}>
                        <Author>Author: {review.author}</Author>
                        <Content>{review.content}</Content>
                    </ReviewItem>
                  ))
                   : "Sorry, we don't have any review for this movie"}
            </ReviewList>
        </ReviewContainer>
    );
}

export default Reviews;