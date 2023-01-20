import React, { useState, useEffect } from 'react';
import './style.css';
import { Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import { CocktailList } from './components/CocktailList.js';
import { CocktailDetails } from './components/CocktailDetails.js';
import { CocktailAdd } from './components/CocktailAdd.js';
import { CocktailEdit } from './components/CocktailEdit.js';
import { Account } from './components/Account.js';
import { useDispatch } from 'react-redux';
import { createDrinksAction } from './actions/drinkActions.js';
import Navbar from './components/Navbar.js';
import Error from './components/Error.js';
import axios from 'axios';
import { createCommentAction } from './actions/commentActions';
import { createUsersAction } from './actions/userActions';

export default function App() {
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const fetchCocktails = await axios
        .get(`/api/cocktails`)
        .then((res) => dispatch(createDrinksAction(res.data)))
        .catch((err) => console.error(err));
      const fetchComments = await axios
        .get(`/api/comments`)
        .then((res) => dispatch(createCommentAction(res.data)))
        .catch((err) => console.error(err))
      const fetchUsers = await axios
        .get(`/api/users`)
        .then((res) => dispatch(createUsersAction(res.data)))
        .catch((err) => console.error(err))
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
        <Route path=":id/edit" element={<CocktailEdit />} />
        <Route path="add" element={<CocktailAdd />} />
        <Route path="login" element={<Account />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
