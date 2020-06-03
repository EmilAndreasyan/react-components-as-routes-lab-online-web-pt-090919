import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
    {movies.map(movie => {
      return <div>
      {movie.title} {movie.time}
      </div>
    })}
    {movies.genre.map(genre => {
      return <ul><li>{genre}</li></ul>
    })}
    </div>
  );
};

export default Movies;
