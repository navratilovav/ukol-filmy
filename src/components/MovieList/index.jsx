import React from 'react';
import Movie from '../Movie';
import './style.css';

 const MovieList = ({movies}) => {
    return (
        <div className="movieListContainer">
         {movies.map(({id, title, poster, year, rating, genre, director}) => <Movie key={id} title={title} poster={poster} year={year} rating={rating} genre={genre} director={director} />       
        )}
        </div>
    )    
}

export default MovieList;