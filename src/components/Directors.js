import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map(director => {
        return (<div>
        {director.name}
        </div>)
      })}
      {directors.movies.map(movie => {
        return <ul><li>{movie}</li></ul>
      })}
    </div>
  );
}

export default Directors
