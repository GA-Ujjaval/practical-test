import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchAsteroid from './SearchAsteroid';
import {
  searchAsteroidById,
  getAllAsteroids,
} from '../../actions/asteroidActions';

export default withRouter(
  connect(
    (state) => ({
      asteroids: state.asteroid.asteroids,
      selectedAsteroid: state.asteroid.selectedAsteroid,
    }),
    (dispatch) => ({
      getAllAsteroids: (id) => {
        // dispatching function as action by middleware
        dispatch(getAllAsteroids(id));
      },
      searchAsteroidById: (id, props) => {
        // dispatching function as action by middleware
        dispatch(searchAsteroidById(id, props));
      },
    })
  )(SearchAsteroid)
);
