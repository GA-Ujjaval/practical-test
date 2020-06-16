import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Asteroid from './Asteroid';
import {
  searchAsteroidById,
  getAllAsteroids,
} from '../../actions/asteroidActions';

export default withRouter(
  connect(
    (state) => ({
      asteroids: state.asteroid.asteroids,
      selectedAsteroid: state.asteroid.selectedAsteroid,
      loading: state.asteroid.loading,
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
  )(Asteroid)
);
