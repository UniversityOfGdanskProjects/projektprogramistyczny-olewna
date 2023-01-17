import React from 'react';
// import CommentList from './CommentList.js';
import { useCocktail } from '../context/CocktailsProvider.js';

export function Login() {
  const { handleSubmit, handleChange, logged, loginInfo, setLogged } =
    useCocktail();
  const { password, name } = loginInfo;
  return logged.nickname === '' ? (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="button"
          type="text"
          name="name"
          value={name}
          placeholder="Your nickname"
          onChange={handleChange}
          required
        />
        <input
          className="button"
          type="password"
          name="password"
          value={password}
          placeholder="Your password"
          onChange={handleChange}
          required
        />
        <button className="button">Sign in</button>
      </form>
    </div>
  ) : (
    <div>
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
      <div>{logged.nickname}</div>
    </div>
  );
}
