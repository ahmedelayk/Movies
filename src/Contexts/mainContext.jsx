import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const MoviesContext = createContext("");

export default function MainContext({children}) {
    const [movies, setMovies] = useState([]);
    
    // get all trending movies
    const getTrendingMovies = ()=>{
        axios.get('http://localhost:3000/results').then((res)=>setMovies(res.data));
    }
    useEffect(()=>{
        getTrendingMovies();
    },[])
    
    // delete a movie
    const deleteMovie = (id)=>{
        setMovies(()=>movies.filter((movie)=>movie.id !== id));
    }


    
    // values that would be shared by context
    const values = {movies, deleteMovie};
    return (
    <>
        <MoviesContext.Provider value={values}>
            {children}
        </MoviesContext.Provider>
    </>
  )
}

