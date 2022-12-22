import React, { useState, useEffect } from 'react';
import './style.css';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { CocktailList } from './components/CocktailList.js';
import { Home } from './components/Home.js';
import { CocktailDetails } from './components/CocktailDetails.js';
import { useDispatch } from 'react-redux';
import { createDrinksAction } from './actions/drinkActions.js';
import axios from 'axios';

export default function App() {
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a')
      .then((res) => dispatch(createDrinksAction(res.data.drinks)));
  }, []);

  return (
    <div>
      {location.pathname !== '/' ? (
        <button className="link-home">
          <Link to="/">Home</Link>
        </button>
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<CocktailList />} />
        <Route path="list/:id" element={<CocktailDetails />} />
      </Routes>
    </div>
  );
}
