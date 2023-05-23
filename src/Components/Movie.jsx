import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MoviesContext } from '../Contexts/mainContext'
import classes from '../Styles/Movie.module.css'

export default function Movie({ movie }) {

    const imgPath = `https://image.tmdb.org/t/p/w500` + movie.poster_path;
    const { deleteMovie } = useContext(MoviesContext);
    const navigate = useNavigate();
    const showDetails = (id)=>{
        navigate(`movie/${id}`);
    }

    return (
        <>
            <div className='col-md-3 p-1'>
                <div className='text-white rounded bg-secondary'>
                    <img className='w-100 ' src={imgPath} alt={movie.title} title={movie.title} onClick={()=>{showDetails(movie.id)}}/>
                    <div className='p-2'>
                        <div className='mt-2'>
                            <h6 className='' onClick={()=>{showDetails(movie.id)}} >{movie.title}</h6>
                            <h6 className=''>{parseInt(movie.release_date)}</h6>
                        </div>
                        <div className='d-flex justify-content-between p-2'>
                            <span className={classes.imdb_btn} >{+(movie.vote_average).toFixed(1)}</span>
                            <button className={classes.delete_btn} onClick={()=>{deleteMovie(movie.id)}}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
