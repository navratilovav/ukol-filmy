import React from 'react';
import Movie from '../Movie';
import './style.css';

 const MovieList = ({movies}) => {
    return (
        <div className="movieListContainer">
         {movies.map(movie => <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} year={movie.year}
         rating={movie.rating} genre={movie.genre} director={movie.director} />
        )}
        </div>
    )    
}

export default MovieList;