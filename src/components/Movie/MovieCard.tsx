import React from 'react';
import '../../styles/app.scss';
import { MovieCard as MovieProps } from '../../interfaces/Movie';

const MovieCard = ({ image = '-', name = '-', releaseDate = '-', genres = ['-'] }: MovieProps) => (
  <div className="card">
    <img src={image} alt={image} />

    <div className="card__title">
      <p>{name}</p>

      <span>{releaseDate}</span>
    </div>
    <p className="card__subtitle">{genres.join(', ').toString()}</p>
  </div>
);

export default MovieCard;
