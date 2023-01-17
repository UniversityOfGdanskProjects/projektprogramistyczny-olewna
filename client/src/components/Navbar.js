import React from 'react';
import { Link } from 'react-router-dom';
import { useCocktail } from '../context/CocktailsProvider.js';

export default function Navbar() {
  const { logged } = useCocktail();
  return (
    <div className="navbar">
      <h1 className="navbar-title">COCKTAIL BAR 🍹</h1>
      <button>
        <Link to="/login">
          {logged.type === '' ? <div>Log in</div> : <div>Account</div>}
        </Link>
      </button>
    </div>
  );
}
