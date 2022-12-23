import React, { useState, useEffect } from 'react';
import './style.css';
import { Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import { CocktailList } from './components/CocktailList.js';
import { CocktailDetails } from './components/CocktailDetails.js';
import { Admin } from './components/Admin.js';
import { useDispatch } from 'react-redux';
import { createDrinksAction } from './actions/drinkActions.js';
import Navbar from './components/Navbar.js';
import Error from './components/Error.js';
import axios from 'axios';

export default function App() {
  let location = useLocation();
  const dispatch = useDispatch();
  const [searched, setSearched] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searched}`
      )
      .then((res) => dispatch(createDrinksAction(res.data.drinks)));
  }, [searched]);

  return (
    <div>
      <Navbar />
      {location.pathname !== '/' ? (
        <div className="link-home">
          <button className="link-home">
            <Link to="/">Home</Link>
          </button>
        </div>
      ) : null}
      <Routes>
        <Route path="/"
          element={<CocktailList setSearched={setSearched} />}
        />
        <Route path=":id" element={<CocktailDetails />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
