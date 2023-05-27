import { useParams } from "react-router-dom";

const Cast = () => {
    const { movieId } = useParams();

    // http запрос

    return <div>

        <img src='#' alt=""/>
        <p>Name : { movieId}</p>
        <p>Character:</p>
    </div>
}

export default Cast;