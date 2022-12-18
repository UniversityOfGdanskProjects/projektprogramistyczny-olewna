import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export function Home() {
  return (
    <div>
      <h1>COCKTAIL BAR</h1>
      <button>
        <Link to="/list">LIST OF COCKTAILS</Link>
      </button>
    </div>
  );
}

export function CoctailList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a')
      .then((res) => res.data.drinks)
      .then((res) => setData(res));
  }, []);

  // do reduxa

  const drinkList = data.map((x) => (
    <div className="drink" key={x.idDrink}>
      <img src={x.strDrinkThumb} className="drink-img" />
      <div className="drink-info">
        <h2>{x.strDrink}</h2>
        <h3>{x.strAlcoholic}</h3>
        <button>
          <Link to="/list/:id">Details</Link>
        </button>
      </div>
    </div>
  ));
  return <div>{drinkList}</div>;
}

export function CocktailDetails() {}
