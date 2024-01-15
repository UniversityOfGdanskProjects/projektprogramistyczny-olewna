export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';

export const addCommentAction = (payload) => ({
  type: ADD_COMMENT,
  payload,
});
export const updateCommentAction = (payload) => ({
  type: UPDATE_COMMENT,
  payload,
});
export const deleteCommentAction = (payload) => ({
  type: DELETE_COMMENT,
  payload,
});
export const createCommentAction = (payload) => ({
  type: CREATE_COMMENT,
  payload,
});
