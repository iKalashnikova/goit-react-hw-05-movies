import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useRef } from 'react'

const MovieDetails = () => {
    
    const location = useLocation();
    const BackLinkLocation = useRef(location.state?.from ?? '/movies')
    console.log(location);

    const {movieId} = useParams();
    console.log({ movieId });
    
    
    return <div> 
        <Link to={BackLinkLocation}>Повернутись назад</Link>
        <img src="#" alt = "#"/>
        <h2>Назва фільму: {movieId}</h2>
        <p>рейтинг</p>
        <h3> Overview</h3>
        <p>опис</p>
        <h4>Genres</h4>
        <p>жанри</p>
        <div> <h5>Additional information</h5>
            <ul>
                <li> <Link to='Cast'>Cast</Link></li>
               <li><Link to='Reviews'>Reviews</Link></li>
                
            </ul>
            <Outlet/>
        </div>
        
    </div>
}

export default MovieDetails;