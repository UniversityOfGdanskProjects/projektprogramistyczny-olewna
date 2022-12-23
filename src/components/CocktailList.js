import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm.js';
import CommentList from './CommentList.js';

export function CocktailList({ setSearched }) {
  const drinksList = useSelector((state) => state.drinks);

  const drinkList =
    drinksList !== null ? (
      drinksList.map((x) => (
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
      ))
    ) : (
      <h3>No results :(</h3>
    );

  const [search, setSearch] = useState('');

  function handleChange(event) {
    const { value } = event.target;
    setSearch(value);
  }

  useEffect(() => {
    setSearched(search);
  }, [search]);

  return (
    <div>
      <div className="search-input">
        <input
          name="search"
          type="text"
          placeholder="Search cocktails..."
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className="drink-list">{drinkList}</div>
      <div className="comment-users">
        <CommentForm />
        <CommentList />
      </div>
    </div>
  );
}
