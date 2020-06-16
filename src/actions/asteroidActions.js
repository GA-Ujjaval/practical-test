import {
  SEARCH_ASTEROID_START,
  SEARCH_ASTEROID_SUCCESS,
  SEARCH_ASTEROID_FAIL,
  GET_ALL_ASTEROIDS_FAIL,
  GET_ALL_ASTEROIDS_START,
  GET_ALL_ASTEROIDS_SUCCESS,
} from './actionTypes';

import { searchAsteroidByIdApi, getAllAsteroidsApi } from '../api/asteroidApi';

export const searchAsteroidById = (id, props) => {
  return (dispatch) => {
    dispatch({ type: SEARCH_ASTEROID_START });
    searchAsteroidByIdApi(id)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          dispatch({
            type: SEARCH_ASTEROID_SUCCESS,
            payload: res.data,
          });
          if (props) {
            props.history.push(`/asteroid/${id}`);
          }
        } else {
          dispatch({ type: SEARCH_ASTEROID_FAIL, payload: res.message });
        }
      })
      .catch((err) => {
        dispatch({ type: SEARCH_ASTEROID_FAIL, payload: err.message });
      });
  };
};

export const getAllAsteroids = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_ASTEROIDS_START });
    getAllAsteroidsApi(id)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          dispatch({
            type: GET_ALL_ASTEROIDS_SUCCESS,
            payload: res.data.near_earth_objects,
          });
        } else {
          dispatch({ type: GET_ALL_ASTEROIDS_FAIL, payload: res.message });
        }
      })
      .catch((err) => {
        dispatch({ type: GET_ALL_ASTEROIDS_FAIL, payload: err.message });
      });
  };
};
