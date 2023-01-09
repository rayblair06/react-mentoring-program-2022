import React from 'react';
import '../../styles/app.scss';
import MovieCard from './MovieCard';
import { Movie } from '../../interfaces/Movie';

const MovieList = ({ movies }: { movies: Array<Movie> }) => (
  <div id="movielist">
    <p id="results">
      <span>{movies.length}</span> movies found
    </p>

    <div id="movielist__container">
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          name={movie.name}
          image={movie.image}
          releaseDate={movie.releaseDate}
          genres={movie.genres}
        />
      ))}
    </div>
  </div>
);

export default MovieList;
