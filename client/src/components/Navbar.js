import React from "react";
import { Link } from "react-router-dom";
import { useCocktail } from "../context/CocktailsProvider.js";

export default function Navbar() {
  const { logged } = useCocktail();
  return (
    <nav className="navbar navbar-expand navbar-dark p-3 mb-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold ">
          <h2>🍹 COCKTAIL BAR 🍹</h2>
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/login" className="btn btn-dark">
              {logged.type === "" ? <div>Log in</div> : <div>Account</div>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
