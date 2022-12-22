import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function CocktailList() {
  const dispatch = useDispatch();

  const drinksList = useSelector((state) => state.drinks);

  const drinkList = drinksList.map((x) => (
    <div className="drink" key={x.idDrink}>
      <img src={x.strDrinkThumb} className="drink-img" />
      <div className="drink-info">
        <h2>{x.strDrink}</h2>
        <h3>{x.strAlcoholic}</h3>
        <button>
          <Link to={`/list/${x.idDrink}`}>Details</Link>
        </button>
      </div>
    </div>
  ));
  return <div>{drinkList}</div>;
}
