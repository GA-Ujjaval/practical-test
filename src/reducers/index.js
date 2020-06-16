import asteroid from './asteroid';
import { combineReducers } from 'redux';

export default () =>
  /**@method combineReducers used to use multiple reducers */
  combineReducers({
    asteroid,
  });
