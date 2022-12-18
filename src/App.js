import React, { useState, useEffect } from 'react';
import './style.css';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Home, CoctailList } from './components/Home.js';

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
        <Route path="list" element={<CoctailList />} />
        <Route path="list/:id" element={<CoctailList />} />
      </Routes>
    </div>
  );
}
