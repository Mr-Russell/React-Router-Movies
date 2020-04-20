import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList.js'
import Movie from './Movies/Movie.js'


const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
    console.log(movie)
  };
   // console.log(savedList)
  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Switch>
          <Route path='/movies/:id'>
            <Movie />
          </Route>

          <Route path='/'>
            <MovieList />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
