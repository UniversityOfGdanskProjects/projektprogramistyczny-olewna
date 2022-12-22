import { combineReducers } from '@reduxjs/toolkit';
import commentReducer from '../reducers/commentReducer.js';
import drinkReducer from '../reducers/drinkReducer.js';

export default combineReducers({
  comments: commentReducer,
  drinks: drinkReducer,
});
