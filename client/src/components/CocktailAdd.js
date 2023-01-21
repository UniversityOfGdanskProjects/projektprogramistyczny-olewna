import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addDrinkAction } from "../actions/drinkActions";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export function CocktailAdd() {
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState(null);

  const fetching = async (val) => {
    const response = await axios
      .post("/api/cocktails", val)
      .then((res) => {
        console.log("axios post success");
      })
      .catch((err) => {
        setErrorMsg(err.response);
      });
  };

  const formik = useFormik({
    initialValues: {
      idDrink: uuidv4(),
      strDrink: "",
      strAlcoholic: "",
      strCategory: "",
      strGlass: "",
      strInstructions: "",
      strDrinkThumb: "",
      strIngredient1: "",
      strIngredient2: "",
      strIngredient3: "",
      strIngredient4: "",
      strIngredient5: "",
      strIngredient6: "",
      strIngredient7: "",
      strIngredient8: "",
      strIngredient9: "",
      strIngredient10: "",
      strMeasure1: "",
      strMeasure2: "",
      strMeasure3: "",
      strMeasure4: "",
      strMeasure5: "",
      strMeasure6: "",
      strMeasure7: "",
      strMeasure8: "",
      strMeasure9: "",
      strMeasure10: "",
      rating: [],
    },
    onSubmit: (values) => {
      dispatch(addDrinkAction(values));
      fetching(values);
      formik.resetForm({
        idDrink: uuidv4(),
        strDrink: "",
        strAlcoholic: "",
        strCategory: "",
        strGlass: "",
        strInstructions: "",
        strDrinkThumb: "",
        strIngredient1: "",
        strIngredient2: "",
        strIngredient3: "",
        strIngredient4: "",
        strIngredient5: "",
        strIngredient6: "",
        strIngredient7: "",
        strIngredient8: "",
        strIngredient9: "",
        strIngredient10: "",
        strMeasure1: "",
        strMeasure2: "",
        strMeasure3: "",
        strMeasure4: "",
        strMeasure5: "",
        strMeasure6: "",
        strMeasure7: "",
        strMeasure8: "",
        strMeasure9: "",
        strMeasure10: "",
        rating: [],
      });
    },
  });

  return (
    <div className="container">
      <div className="h1 my-3 text-center">Add new cocktail!</div>
      <form className="form" onSubmit={formik.handleSubmit}>
        <input
          name="strDrink"
          type="text"
          placeholder="cocktail name..."
          required
          onChange={formik.handleChange}
          value={formik.values.strDrink}
          className="form-control mb-3"
        />
        <label html="strAlcoholic">Choose type</label>
        <select
          id="strAlcoholic"
          name="strAlcoholic"
          value={formik.values.strAlcoholic}
          onChange={formik.handleChange}
          required
          className="form-control mb-3"
        >
          <option value="">-</option>
          <option value="Alcoholic">Alcoholic</option>
          <option value="Non alcoholic">Non alcoholic</option>
          <option value="Optional alcohol">Optional alcohol</option>
        </select>
        <input
          name="strCategory"
          type="text"
          placeholder="cocktail category..."
          required
          onChange={formik.handleChange}
          value={formik.values.strCategory}
          className="form-control mb-3"
        />
        <input
          name="strGlass"
          type="text"
          placeholder="glass type..."
          required
          onChange={formik.handleChange}
          value={formik.values.strGlass}
          className="form-control mb-3"
        />
        <input
          name="strInstructions"
          type="text"
          placeholder="how to make it..?"
          required
          onChange={formik.handleChange}
          value={formik.values.strInstructions}
          className="form-control mb-3"
        />
        <input
          name="strDrinkThumb"
          type="text"
          placeholder="cocktail photo url..."
          required
          onChange={formik.handleChange}
          value={formik.values.strDrinkThumb}
          className="form-control mb-3"
        />
        <div className="row mt-5">
          <div className="col-8 col-lg-4 offset-lg-3">
            <input
              name="strIngredient1"
              type="text"
              placeholder="ingredient"
              required
              onChange={formik.handleChange}
              value={formik.values.strIngredient1}
              className="form-control mb-3"
            />
            <input
              name="strIngredient2"
              type="text"
              placeholder="ingredient"
              onChange={formik.handleChange}
              value={formik.values.strIngredient2}
              className="form-control mb-3"
            />
            <input
              name="strIngredient3"
              type="text"
              placeholder="ingredient"
              onChange={formik.handleChange}
              value={formik.values.strIngredient3}
              className="form-control mb-3"
            />
            <input
              name="strIngredient4"
              type="text"
              placeholder="ingredient"
              onChange={formik.handleChange}
              value={formik.values.strIngredient4}
              className="form-control mb-3"
            />
            <input
              name="strIngredient5"
              type="text"
              placeholder="ingredient"
              onChange={formik.handleChange}
              value={formik.values.strIngredient5}
              className="form-control mb-3"
            />
            <input
              name="strIngredient6"
              type="text"
              placeholder="ingredient"
              onChange={formik.handleChange}
              value={formik.values.strIngredient6}
              className="form-control mb-3"
            />
            <input
              name="strIngredient7"
              type="text"
              placeholder="ingredient"
              onChange={formik.handleChange}
              value={formik.values.strIngredient7}
              className="form-control mb-3"
            />
            <input
              name="strIngredient8"
              type="text"
              placeholder="ingredient"
              onChange={formik.handleChange}
              value={formik.values.strIngredient8}
              className="form-control mb-3"
            />
            <input
              name="strIngredient9"
              type="text"
              placeholder="ingredient"
              onChange={formik.handleChange}
              value={formik.values.strIngredient9}
              className="form-control mb-3"
            />
            <input
              name="strIngredient10"
              type="text"
              placeholder="ingredient"
              onChange={formik.handleChange}
              value={formik.values.strIngredient10}
              className="form-control mb-3"
            />
          </div>
          <div className="col-4 col-lg-2">
            <input
              name="strMeasure1"
              type="text"
              placeholder="measure"
              required
              onChange={formik.handleChange}
              value={formik.values.strMeasure1}
              className="form-control mb-3"
            />
            <input
              name="strMeasure2"
              type="text"
              placeholder="measure"
              onChange={formik.handleChange}
              value={formik.values.strMeasure2}
              className="form-control mb-3"
            />
            <input
              name="strMeasure3"
              type="text"
              placeholder="measure"
              onChange={formik.handleChange}
              value={formik.values.strMeasure3}
              className="form-control mb-3"
            />
            <input
              name="strMeasure4"
              type="text"
              placeholder="measure"
              onChange={formik.handleChange}
              value={formik.values.strMeasure4}
              className="form-control mb-3"
            />
            <input
              name="strMeasure5"
              type="text"
              placeholder="measure"
              onChange={formik.handleChange}
              value={formik.values.strMeasure5}
              className="form-control mb-3"
            />
            <input
              name="strMeasure6"
              type="text"
              placeholder="measure"
              onChange={formik.handleChange}
              value={formik.values.strMeasure6}
              className="form-control mb-3"
            />
            <input
              name="strMeasure7"
              type="text"
              placeholder="measure"
              onChange={formik.handleChange}
              value={formik.values.strMeasure7}
              className="form-control mb-3"
            />
            <input
              name="strMeasure8"
              type="text"
              placeholder="measure"
              onChange={formik.handleChange}
              value={formik.values.strMeasure8}
              className="form-control mb-3"
            />
            <input
              name="strMeasure9"
              type="text"
              placeholder="measure"
              onChange={formik.handleChange}
              value={formik.values.strMeasure9}
              className="form-control mb-3"
            />
            <input
              name="strMeasure10"
              type="text"
              placeholder="measure"
              onChange={formik.handleChange}
              value={formik.values.strMeasure10}
              className="form-control mb-3"
            />
          </div>
        </div>

        {errorMsg && <div className="text-center">{errorMsg}</div>}
        <button className="btn btn-light my-3 d-block mx-auto" type="submit">
          Add cocktail
        </button>
      </form>
    </div>
  );
}
