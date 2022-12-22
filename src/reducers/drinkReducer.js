import {
  ADD_DRINK,
  UPDATE_DRINK,
  DELETE_DRINK,
  CREATE_DRINKS,
} from '../actions/drinkActions.js';

export default function drinkReducer(state = [], action) {
  switch (action.type) {
    case CREATE_DRINKS:
      return state.concat(action.payload);
    case ADD_DRINK:
      return [...state, action.payload];
    case DELETE_DRINK:
      return [...state.filter((drink) => drink.idDrink !== action.payload)];
    case UPDATE_DRINK:
      return [
        ...state.map((drink) => {
          if (drink.idDrink === action.payload.idDrink) {
            if (typeof action.payload.strDrink !== undefined)
              drink.strDrink = action.payload.strDrink;
            if (typeof action.payload.strAlcoholic !== undefined)
              drink.strAlcoholic = action.payload.strAlcoholic;
            if (typeof action.payload.strGlass !== undefined)
              drink.strGlass = action.payload.strGlass;
            if (typeof action.payload.strInstructions !== undefined)
              drink.strInstructions = action.payload.strInstructions;
            if (typeof action.payload.strDrinkThumb !== undefined)
              drink.strDrinkThumb = action.payload.strDrinkThumb;
            return drink;
          } else return drink;
        }),
      ];
    default:
      return state;
  }
}
