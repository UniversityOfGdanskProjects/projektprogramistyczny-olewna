import { combineReducers } from '@reduxjs/toolkit';
import commentReducer from '../reducers/commentReducer.js';

export default combineReducers({
  comments: commentReducer,
});
