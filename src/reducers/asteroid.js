import {
  SEARCH_ASTEROID_START,
  SEARCH_ASTEROID_SUCCESS,
  SEARCH_ASTEROID_FAIL,
  GET_ALL_ASTEROIDS_FAIL,
  GET_ALL_ASTEROIDS_START,
  GET_ALL_ASTEROIDS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  asteroids: [],
  selectedAsteroid: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ASTEROIDS_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_ALL_ASTEROIDS_SUCCESS:
      return {
        ...state,
        asteroids: payload,
        loading: false,
        error: false,
      };
    case GET_ALL_ASTEROIDS_FAIL:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SEARCH_ASTEROID_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SEARCH_ASTEROID_SUCCESS:
      return {
        ...state,
        selectedAsteroid: payload,
        loading: false,
        error: false,
      };
    case SEARCH_ASTEROID_FAIL:
      return {
        ...state,
        loading: true,
        error: false,
      };
    default:
      return state;
  }
};
