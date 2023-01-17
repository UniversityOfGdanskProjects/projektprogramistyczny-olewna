export const ADD_DRINK = 'ADD_DRINK';
export const UPDATE_DRINK = 'UPDATE_DRINK';
export const DELETE_DRINK = 'DELETE_DRINK';
export const CREATE_DRINKS = 'CREATE_DRINKS';

export const addDrinkAction = (payload) => ({
  type: ADD_DRINK,
  payload,
});
export const updateDrinkAction = (payload) => ({
  type: UPDATE_DRINK,
  payload,
});
export const deleteDrinkAction = (payload) => ({
  type: DELETE_DRINK,
  payload,
});
export const createDrinksAction = (payload) => ({
  type: CREATE_DRINKS,
  payload,
});
