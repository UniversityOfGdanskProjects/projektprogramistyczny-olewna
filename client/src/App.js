import React, { useState, useEffect } from 'react';
import './style.css';
import { Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import { CocktailList } from './components/CocktailList.js';
import { CocktailDetails } from './components/CocktailDetails.js';
import { Login } from './components/Login.js';
import { useDispatch } from 'react-redux';
import { createDrinksAction } from './actions/drinkActions.js';
import Navbar from './components/Navbar.js';
import Error from './components/Error.js';
import axios from 'axios';

export default function App() {
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(
          `/api/cocktails`
        )
        .then((res) => dispatch(createDrinksAction(res.data)))
        .catch((err) => console.error(err));
    }
    fetchData()
  }, []);

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
        <Route path="/" element={<CocktailList />} />
        <Route path=":id" element={<CocktailDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
