import {
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
} from '../actions/commentActions.js';

export default function commentReducer(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case DELETE_COMMENT:
      return [...state.filter((comment) => comment.id !== action.payload)];
    case UPDATE_COMMENT:
      return [
        ...state.map((comment) => {
          if (comment.id === action.payload.id) {
            comment.name = action.payload.name;
          } else return comment;
        }),
      ];
    default:
      return state;
  }
}
