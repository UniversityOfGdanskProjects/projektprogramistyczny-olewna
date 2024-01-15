export const ADD_USER = 'ADD_USER';
export const CREATE_USER = 'CREATE_USER';

export const addUserAction = (payload) => ({
  type: ADD_USER,
  payload,
});

export const createUsersAction = (payload) => ({
  type: CREATE_USER,
  payload,
});
