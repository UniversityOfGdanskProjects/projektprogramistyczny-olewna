import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CocktailEdit } from './CocktailEdit.js';
import { useCocktail } from '../context/CocktailsProvider.js';
import Error from './Error.js';

export function CocktailDetails() {
  const { id } = useParams();
  const drink = useSelector((state) => state.drinks).filter(
    (x) => x.idDrink === id
    )[0];
  const { logged } = useCocktail();
    
    return drink !== undefined ? (
      <div className="details">
        {logged.type==='admin' ? <button><Link to={`/${drink.idDrink}/edit`} component={<CocktailEdit drink={drink} />}>Edit</Link></button> : null}
        <h3>name: {drink.strDrink}</h3>
        <h3>glass: {drink.strGlass}</h3>
        <h3>category: {drink.strCategory}</h3>
        <h3>type: {drink.strAlcoholic}</h3>
        <h3>instruction: {drink.strInstructions}</h3>
        {drink.rating.length <= 0 ? (
          <h3>No rates yet (be first!)</h3>
        ) : (
          <h3>rates: {drink.rating.toString()}</h3>
        )}
        <h3>
          ingredients: <br />
          {drink.strIngredient1 !== null && drink.strIngredient1 !== "" ? (
            <div>
              -{drink.strMeasure1}
              {drink.strIngredient1}
              <br />
            </div>
          ) : null}
          {drink.strIngredient2 !== null && drink.strIngredient2 !== "" ? (
            <div>
              -{drink.strMeasure2}
              {drink.strIngredient2}
              <br />
            </div>
          ) : null}
          {drink.strIngredient3 !== null && drink.strIngredient3 !== "" ? (
            <div>
              -{drink.strMeasure3}
              {drink.strIngredient3}
              <br />
            </div>
          ) : null}
          {drink.strIngredient4 !== null && drink.strIngredient4 !== "" ? (
            <div>
              -{drink.strMeasure4}
              {drink.strIngredient4}
              <br />
            </div>
          ) : null}
          {drink.strIngredient5 !== null && drink.strIngredient5 !== "" ? (
            <div>
              -{drink.strMeasure5}
              {drink.strIngredient5}
              <br />
            </div>
          ) : null}
          {drink.strIngredient6 !== null && drink.strIngredient6 !== "" ? (
            <div>
              -{drink.strMeasure6}
              {drink.strIngredient6}
              <br />
            </div>
          ) : null}
          {drink.strIngredient7 !== null && drink.strIngredient7 !== "" ? (
            <div>
              -{drink.strMeasure7}
              {drink.strIngredient7}
              <br />
            </div>
          ) : null}
          {drink.strIngredient8 !== null && drink.strIngredient8 !== "" ? (
            <div>
              -{drink.strMeasure8}
              {drink.strIngredient8}
              <br />
            </div>
          ) : null}
          {drink.strIngredient9 !== null && drink.strIngredient9 !== "" ? (
            <div>
              -{drink.strMeasure9}
              {drink.strIngredient9}
              <br />
            </div>
          ) : null}
          {drink.strIngredient10 !== null && drink.strIngredient10 !== "" ? (
            <div>
              -{drink.strMeasure10}
              {drink.strIngredient10}
              <br />
            </div>
          ) : null}
          {drink.strIngredient11 !== null && drink.strIngredient11 !== undefined ? (
            <div>
              -{drink.strMeasure11}
              {drink.strIngredient11}
              <br />
            </div>
          ) : null}
          {drink.strIngredient12 !== null && drink.strIngredient12 !== undefined ? (
            <div>
              -{drink.strMeasure12}
              {drink.strIngredient12}
              <br />
            </div>
          ) : null}
          {drink.strIngredient13 !== null && drink.strIngredient13 !== undefined ? (
            <div>
              -{drink.strMeasure13}
              {drink.strIngredient13}
              <br />
            </div>
          ) : null}
          {drink.strIngredient14 !== null && drink.strIngredient14 !== undefined ? (
            <div>
              -{drink.strMeasure14}
              {drink.strIngredient14}
              <br />
            </div>
          ) : null}
          {drink.strIngredient15 !== null && drink.strIngredient15 !== undefined ? (
            <div>
              -{drink.strMeasure15}
              {drink.strIngredient15}
              <br />
            </div>
          ) : null}
        </h3>
      </div>
  ) : (
    <Error />
  );
}
