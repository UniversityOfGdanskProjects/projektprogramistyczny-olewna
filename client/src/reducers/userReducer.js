import {
    ADD_USER,
    CREATE_USER,
  } from '../actions/userActions.js'

  export default function userReducer(state = [], action) {
    switch (action.type) {
      case CREATE_USER:
        return (state = action.payload);
      case ADD_USER:
        return [...state, action.payload];
      default:
        return state;
    }
  }
  