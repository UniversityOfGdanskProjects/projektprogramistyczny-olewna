import React from 'react';
import { useCocktail } from '../context/CocktailsProvider.js';
import Register from './Register.js';
import Login from './Login.js';

export function Account() {
  const {logged, setLogged } = useCocktail();
  return logged.nickname === '' ? (
    <div>
      <div>
        <h2>Sign in</h2>
        <Login />
      </div>
      <div>
        <h2>Register</h2>
        <Register />
      </div>
    </div>
  ) : (
    <div>
      <div>Logged as: {logged.nickname}</div>
      <button
        onClick={() =>
          setLogged({
            nickname: '',
            type: '',
          })
        }
      >
        Log out
      </button>
    </div>
  );
}
