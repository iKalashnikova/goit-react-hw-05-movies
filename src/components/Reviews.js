import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const { id } = useParams();

    useEffect(() => 
        {const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTM5NjE1NGQ2YzQ3ODZkNWQ1YmUyMTI5OWEyZmUzNiIsInN1YiI6IjY0NmY5N2IyNzcwNzAwMDExOTI0MWFkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZAuKwEvcInwBmcDArKOc8GXVez8PoE95w65xznuwwg'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => response.reviews)
            .catch(err => console.error(err));})

    
    return <div>
<h2>Author:{ id} </h2>
        <p>Review</p>
    </div>
}

export default Reviews;