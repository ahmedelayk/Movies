import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesContext } from '../Contexts/mainContext';

export default function Details() {
    const {movies} = useContext(MoviesContext);
    const {id} = useParams();
    const currentMovie = movies.find((m)=>+m.id === +id);
    
    return (
        <>
            <div className="container my-2">
                <div className="row">
                    <div className="col-md-5">
                        <img className='w-100' src={`https://image.tmdb.org/t/p/w500` + currentMovie.poster_path} alt={movies.title} />
                    </div>
                    <div className="offset-1 col-md-6 text-white">
                        <h4>{currentMovie.title}</h4>
                        <p>{currentMovie.overview}</p>
                        <p>{+(currentMovie.vote_average).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
