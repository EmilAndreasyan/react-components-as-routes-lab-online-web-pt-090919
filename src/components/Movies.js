import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = movies.map(movie => {
    return <div>Title {movie.title} Time {movie.time} Genre: {movie.genres}</div>
  })
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
    {renderMovies}
    </div>
  );
};

export default Movies;
