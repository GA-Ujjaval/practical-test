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
        dispatch(getAllAsteroids(id));
      },
      searchAsteroidById: (id, props) => {
        dispatch(searchAsteroidById(id, props));
      },
    })
  )(Asteroid)
);
