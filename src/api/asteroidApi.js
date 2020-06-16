import Axios from 'axios';
const SEARCH_ASTEROID_API = process.env.REACT_APP_SEARCH_ASTEROID;
const GET_ALL_ASTEROIDS = process.env.REACT_APP_BROWSE_ASTEROIDS;
const API_KEY = process.env.REACT_APP_API_KEY;

export const searchAsteroidByIdApi = (id) => {
  return Axios.get(`${SEARCH_ASTEROID_API}${id}?api_key=${API_KEY}`);
};

export const getAllAsteroidsApi = (id) => {
  return Axios.get(`${GET_ALL_ASTEROIDS}?api_key=${API_KEY}`);
};
