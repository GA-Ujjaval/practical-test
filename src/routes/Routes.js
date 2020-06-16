import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import searchAsteroid from '../modules/searchAsteroid';
import asteroid from '../modules/asteroid';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={searchAsteroid} />
        <Route exact path='/asteroid/:id' component={asteroid} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
