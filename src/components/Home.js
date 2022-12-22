import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm.js';
import CommentList from './CommentList.js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addDrinkAction } from '../actions/drinkActions.js';

export function Home() {
  return (
    <div>
      <h1>COCKTAIL BAR</h1>
      <button>
        <Link to="/list">LIST OF COCKTAILS</Link>
      </button>
      <div>
        <CommentForm />
        <CommentList />
      </div>
    </div>
  );
}

export function CocktailDetails() {}
