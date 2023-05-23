import { lazy, useContext } from 'react'
import { MoviesContext } from '../Contexts/mainContext'
import Movie from './Movie';
// const Movie = lazy(()=>import('./Movie'));


export default function Home() {
    const {movies} = useContext(MoviesContext);
    return (
        <>
            <div className='container'>
                <div className="row my-2">
                    {movies.map((movie)=> <Movie key={movie.id} movie={movie} /> )}
                </div>
            </div>
        </>
    )
}
