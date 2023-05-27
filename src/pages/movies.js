import { Link, useSearchParams, useLocation } from "react-router-dom";

const Movies = () => {
    // useState
    const [searchParams, setSearchParams] = useSearchParams();
    const movie = searchParams.get('movie') ?? '';
     // useEffect(() => {  http запрос}, []);
    const location = useLocation();

    const updateQueryString = evt => {
        if(evt.target.value === ''){
            return setSearchParams({}); 
        }
        setSearchParams({ movie: evt.target.value });
  };
    
    return <div>
        <input
            type='text'
            value={movie}
            onChange={updateQueryString} />
        {/* <button onClick={() => setSearchParams()}></button> */}
        <ul>{[' movie-1', 'movie-2', 'movie-3'].map(movie => {
            return (<li key={movie}>
                <Link to={`${movie}`} state={{from: location}}>movie</Link>
            </li>);
        })}</ul></div>
        
}

export default Movies;