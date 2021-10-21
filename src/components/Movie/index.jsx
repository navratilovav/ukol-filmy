import React from 'react'
import './style.css';


const Movie = ({title, poster, year, rating, genre, director}) => (
    <div className="container">
      <div className="poster">
      <img src={`assets/${poster}`} />
      <div className="rating">{rating}/10</div>      
      </div>
      <div className="detailsOfMovie">
      <h2>{title}</h2>
      <div><b>Rok vydání: </b>{year}</div>
      <div><b>Žánr: </b>{genre}</div>
      <div><b>Režie: </b>{director}</div>
      </div>
    </div>
);

export default Movie;