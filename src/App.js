import React, { useState, useEffect } from 'react';
import './style.css';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { CocktailList } from './components/CocktailList.js';
import { Home } from './components/Home.js';

export default function App() {
  let location = useLocation();
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
        {/* <Route path="list/:id" element={<CocktailList />} /> */}
      </Routes>
    </div>
  );
}
