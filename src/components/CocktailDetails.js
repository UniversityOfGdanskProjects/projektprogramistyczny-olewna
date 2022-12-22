import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function CocktailDetails() {
  const { id } = useParams();
  const drink = useSelector((state) => state.drinks).filter(
    (x) => x.idDrink === id
  )[0];

  return (
    <div>
      <h3>name: {drink.strDrink}</h3>
      <h3>id: {drink.idDrink}</h3>
      <h3>glass: {drink.strGlass}</h3>
      <h3>image_url: {drink.strDrinkThumb}</h3>
      <h3>type: {drink.strAlcoholic}</h3>
      <h3>instruction: {drink.strInstructions}</h3>
      <h3>
        ingredients: <br />
        {drink.strIngredient1 !== null ? (
          <div>
            -{drink.strIngredient1}
            <br />
          </div>
        ) : null}
        {drink.strIngredient2 !== null ? (
          <div>
            -{drink.strIngredient2}
            <br />
          </div>
        ) : null}
        {drink.strIngredient3 !== null ? (
          <div>
            -{drink.strIngredient3}
            <br />
          </div>
        ) : null}
        {drink.strIngredient4 !== null ? (
          <div>
            -{drink.strIngredient4}
            <br />
          </div>
        ) : null}
        {drink.strIngredient5 !== null ? (
          <div>
            -{drink.strIngredient5}
            <br />
          </div>
        ) : null}
        {drink.strIngredient6 !== null ? (
          <div>
            -{drink.strIngredient6}
            <br />
          </div>
        ) : null}
        {drink.strIngredient7 !== null ? (
          <div>
            -{drink.strIngredient7}
            <br />
          </div>
        ) : null}
        {drink.strIngredient8 !== null ? (
          <div>
            -{drink.strIngredient8}
            <br />
          </div>
        ) : null}
        {drink.strIngredient9 !== null ? (
          <div>
            -{drink.strIngredient9}
            <br />
          </div>
        ) : null}
        {drink.strIngredient10 !== null ? (
          <div>
            -{drink.strIngredient10}
            <br />
          </div>
        ) : null}
        {drink.strIngredient11 !== null ? (
          <div>
            -{drink.strIngredient11}
            <br />
          </div>
        ) : null}
        {drink.strIngredient12 !== null ? (
          <div>
            -{drink.strIngredient12}
            <br />
          </div>
        ) : null}
        {drink.strIngredient13 !== null ? (
          <div>
            -{drink.strIngredient13}
            <br />
          </div>
        ) : null}
        {drink.strIngredient14 !== null ? (
          <div>
            -{drink.strIngredient14}
            <br />
          </div>
        ) : null}
        {drink.strIngredient15 !== null ? (
          <div>
            -{drink.strIngredient15}
            <br />
          </div>
        ) : null}
      </h3>

      <div>
        <button>
          <Link to="/list">Back</Link>
        </button>
      </div>
    </div>
  );
}
