import React from 'react';
import { Route } from 'react-router-dom';

const Search = () => {
  return (
    <>
      <Route exact path='/search/:id' render={() => <h1>Hola</h1>} />
      {/* <Route exact path='*' render={() => <p>Chau</p>} /> */}
    </>
  );
};
export default Search;
