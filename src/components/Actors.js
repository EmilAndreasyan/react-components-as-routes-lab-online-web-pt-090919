import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.forEach(actor => {
        return <div>{actor.name}</div>
      })}
      {actors.movies.map(movie => {
        return <ul><li>{movie}</li></ul>
      })}
    </div>
  );
};

export default Actors;
