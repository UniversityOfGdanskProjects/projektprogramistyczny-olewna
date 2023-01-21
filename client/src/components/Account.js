import React from "react";
import { useCocktail } from "../context/CocktailsProvider.js";
import Register from "./Register.js";
import Login from "./Login.js";

export function Account() {
  const { logged, setLogged } = useCocktail();
  return logged.nickname === "" ? (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2 className="my-3">Sign in</h2>
          <Login />
        </div>
        <div className="col-6">
          <h2 className="my-3">Register</h2>
          <Register />
        </div>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center flex-column align-items-center mt-5">
      <div>Logged as: {logged.nickname}</div>
      <button
        onClick={() =>
          setLogged({
            nickname: "",
            type: "",
          })
        }
        className="btn btn-light my-3 w-50 d-block mx-auto"
      >
        Log out
      </button>
    </div>
  );
}
