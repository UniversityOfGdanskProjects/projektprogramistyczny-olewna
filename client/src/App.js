import React, { useState, useEffect } from "react";
import "./style.scss";
import { Routes, Route } from "react-router-dom";
import { CocktailList } from "./components/CocktailList.js";
import { CocktailDetails } from "./components/CocktailDetails.js";
import { CocktailAdd } from "./components/CocktailAdd.js";
import { CocktailEdit } from "./components/CocktailEdit.js";
import { Account } from "./components/Account.js";
import { useDispatch } from "react-redux";
import { createDrinksAction } from "./actions/drinkActions.js";
import Navbar from "./components/Navbar.js";
import Error from "./components/Error.js";
import axios from "axios";
import { createCommentAction } from "./actions/commentActions";
import { createUsersAction } from "./actions/userActions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const p1 = axios.get("/api/cocktails");
    const p2 = axios.get("/api/comments");
    const p3 = axios.get("/api/users");

    Promise.all([p1, p2, p3]).then((res) => {
      dispatch(createDrinksAction(res[0].data));
      dispatch(createCommentAction(res[1].data));
      dispatch(createUsersAction(res[2].data));
    });
  }, []);

  return (
    <div>
      <Navbar />
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
