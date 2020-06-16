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
        dispatch(getAllAsteroids(id));
      },
      searchAsteroidById: (id, props) => {
        dispatch(searchAsteroidById(id, props));
      },
    })
  )(SearchAsteroid)
);
