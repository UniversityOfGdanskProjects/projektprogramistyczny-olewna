import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm.js";
import CommentList from "./CommentList.js";
import BarChart from "./BarChart.js";
import { Stars } from "./Stars.js";
import { useFormik } from "formik";
import { deleteDrinkAction } from "../actions/drinkActions.js";
import { useCocktail } from "../context/CocktailsProvider.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export function CocktailList() {
  const drinksList = useSelector((state) => state.drinks);
  const dispatch = useDispatch();
  const [searching, setSearching] = useState(null);
  const { logged } = useCocktail();

  useEffect(() => {
    setSearching(drinksList);
  }, [drinksList]);

  const handleDelete = async (id) => {
    const response = await axios
      .delete("/api/cocktails/" + id)
      .then((res) => console.log("axios delete success"))
      .catch((err) => console.error(err.response));
    dispatch(deleteDrinkAction(id));
  };

  const drinkList =
    searching !== null ? (
      searching.map((x) => (
        <div className="col-12 col-lg-4" key={x.idDrink}>
          <img src={x.strDrinkThumb} className="d-block w-75 mx-auto" />
          <div className="d-block w-75 mx-auto">
            <h5 className="my-1">{x.strDrink}</h5>
            <div className="my-1">{x.strAlcoholic}</div>
            <Stars rating={x.rating} id={x.idDrink} />
            <div className="d-flex justify-content-between mb-3">
              <Link to={`${x.idDrink}`} className="btn btn-light">
                Details
              </Link>

              {logged.type === "admin" ? (
                <button
                  className="btn btn-light "
                  onClick={() => handleDelete(x.idDrink)}
                >
                  🗑️
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ))
    ) : (
      <h3 className="text-center">No results :(</h3>
    );

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      values.name !== ""
        ? axios
            .get("/api/cocktails/" + values.name)
            .then((res) => setSearching(res.data))
            .catch((err) => console.error(err))
        : setSearching(drinksList);
    },
  });

  const categories =
    searching !== null
      ? searching.reduce((acc, cur) => {
          acc[cur.strCategory] = (acc[cur.strCategory] || 0) + 1;
          return acc;
        }, {})
      : null;

  const ths =
    categories !== null
      ? Object.keys(categories).map((x) => <th key={uuidv4()}>{x}</th>)
      : null;
  const tds =
    categories !== null
      ? Object.values(categories).map((x) => <td key={uuidv4()}>{x}</td>)
      : null;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-5">
          <form className="form d-flex" onSubmit={formik.handleSubmit}>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Search cocktails..."
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <button className="btn btn-dark">Search</button>
          </form>
          {drinksList !== null ? (
            <div className="chart">
              <BarChart drinks={searching} />
            </div>
          ) : null}
          {drinksList !== null ? (
            <div>
              <h4 className="text-center">Categories</h4>
              <table className="table w-100 text-white">
                <tbody>
                  <tr>{ths}</tr>
                  <tr>{tds}</tr>
                </tbody>
              </table>
            </div>
          ) : null}
          {drinksList !== null ? (
            <div className="mt-5">
              <CommentForm />
              <CommentList />
            </div>
          ) : null}
        </div>

        <div className="col-12 col-lg-7">
          <div className="row w-100">{drinkList}</div>
          {logged.type === "admin" ? (
            <Link
              to="add"
              className="btn btn-light d-block mx-auto w-50 my-3 mb-5"
            >
              Add new drink
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
