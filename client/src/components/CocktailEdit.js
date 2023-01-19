import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { updateDrinkAction } from '../actions/drinkActions';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

export function CocktailEdit(){
    const { id } = useParams();
    const drink = useSelector((state) => state.drinks).filter(
        (x) => x.idDrink === id
    )[0];

    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState(null)
    
    const fetching = async (val) => {
        const response = await axios
            .patch(`/api/cocktails/${drink.idDrink}`,val)
            .then((res) => {
                console.log('axios patch success')
            })
            .catch((err) => {
                setErrorMsg(err)
            })
    }

    const formik = useFormik({
        initialValues: {
            idDrink:drink.idDrink,
            strDrink:drink.strDrink,
            strAlcoholic:drink.strAlcoholic,
            strCategory:drink.strCategory,
            strGlass:drink.strGlass,
            strInstructions:drink.strInstructions,
            strDrinkThumb:drink.strDrinkThumb,
            strIngredient1:drink.strIngredient1===null ? '' : drink.strIngredient1,
            strIngredient2:drink.strIngredient2===null ? '' : drink.strIngredient2,
            strIngredient3:drink.strIngredient3===null ? '' : drink.strIngredient3,
            strIngredient4:drink.strIngredient4===null ? '' : drink.strIngredient4,
            strIngredient5:drink.strIngredient5===null ? '' : drink.strIngredient5,
            strIngredient6:drink.strIngredient6===null ? '' : drink.strIngredient6,
            strIngredient7:drink.strIngredient7===null ? '' : drink.strIngredient7,
            strIngredient8:drink.strIngredient8===null ? '' : drink.strIngredient8,
            strIngredient9:drink.strIngredient9===null ? '' : drink.strIngredient9,
            strIngredient10:drink.strIngredient10===null ? '' : drink.strIngredient10,
            strMeasure1:drink.strMeasure1===null ? '' : drink.strMeasure1,
            strMeasure2:drink.strMeasure2===null ? '' : drink.strMeasure2,
            strMeasure3:drink.strMeasure3===null ? '' : drink.strMeasure3,
            strMeasure4:drink.strMeasure4===null ? '' : drink.strMeasure4,
            strMeasure5:drink.strMeasure5===null ? '' : drink.strMeasure5,
            strMeasure6:drink.strMeasure6===null ? '' : drink.strMeasure6,
            strMeasure7:drink.strMeasure7===null ? '' : drink.strMeasure7,
            strMeasure8:drink.strMeasure8===null ? '' : drink.strMeasure8,
            strMeasure9:drink.strMeasure9===null ? '' : drink.strMeasure9,
            strMeasure10:drink.strMeasure10===null ? '' : drink.strMeasure10,
        },
        onSubmit: (values) => {
            dispatch(updateDrinkAction(values));
            fetching(values)
        },
    });

    return drink !== undefined ? (
        <div>
            <div>Update this cocktail!</div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        name="strDrink"
                        type="text"
                        placeholder="cocktail name..."
                        required
                        onChange={formik.handleChange}
                        value={formik.values.strDrink}
                    />
                    <label html="strAlcoholic">Choose type</label>
                    <select 
                        id="strAlcoholic"
                        name="strAlcoholic"
                        value={formik.values.strAlcoholic}
                        onChange={formik.handleChange}
                        required
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
                    />
                    <input
                        name="strGlass"
                        type="text"
                        placeholder="glass type..."
                        required
                        onChange={formik.handleChange}
                        value={formik.values.strGlass}
                    />
                    <input
                        name="strInstructions"
                        type="text"
                        placeholder="how to make it..?"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.strInstructions}
                    />
                    <input
                        name="strDrinkThumb"
                        type="text"
                        placeholder="cocktail photo url..."
                        required
                        onChange={formik.handleChange}
                        value={formik.values.strDrinkThumb}
                    />
                    <input
                        name="strIngredient1"
                        type="text"
                        placeholder="ingredient"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.strIngredient1}
                    />
                    <input
                        name="strIngredient2"
                        type="text"
                        placeholder="ingredient"
                        onChange={formik.handleChange}
                        value={formik.values.strIngredient2}
                    />
                    <input
                        name="strIngredient3"
                        type="text"
                        placeholder="ingredient"
                        onChange={formik.handleChange}
                        value={formik.values.strIngredient3}
                    />
                    <input
                        name="strIngredient4"
                        type="text"
                        placeholder="ingredient"
                        onChange={formik.handleChange}
                        value={formik.values.strIngredient4}
                    />
                    <input
                        name="strIngredient5"
                        type="text"
                        placeholder="ingredient"
                        onChange={formik.handleChange}
                        value={formik.values.strIngredient5}
                    />
                    <input
                        name="strIngredient6"
                        type="text"
                        placeholder="ingredient"
                        onChange={formik.handleChange}
                        value={formik.values.strIngredient6}
                    />
                    <input
                        name="strIngredient7"
                        type="text"
                        placeholder="ingredient"
                        onChange={formik.handleChange}
                        value={formik.values.strIngredient7}
                    />
                    <input
                        name="strIngredient8"
                        type="text"
                        placeholder="ingredient"
                        onChange={formik.handleChange}
                        value={formik.values.strIngredient8}
                    />
                    <input
                        name="strIngredient9"
                        type="text"
                        placeholder="ingredient"
                        onChange={formik.handleChange}
                        value={formik.values.strIngredient9}
                    />
                    <input
                        name="strIngredient10"
                        type="text"
                        placeholder="ingredient"
                        onChange={formik.handleChange}
                        value={formik.values.strIngredient10}
                    />
                    <input
                        name="strMeasure1"
                        type="text"
                        placeholder="measure"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.strMeasure1}
                    />
                    <input
                        name="strMeasure2"
                        type="text"
                        placeholder="measure"
                        onChange={formik.handleChange}
                        value={formik.values.strMeasure2}
                    />
                    <input
                        name="strMeasure3"
                        type="text"
                        placeholder="measure"
                        onChange={formik.handleChange}
                        value={formik.values.strMeasure3}
                    />
                    <input
                        name="strMeasure4"
                        type="text"
                        placeholder="measure"
                        onChange={formik.handleChange}
                        value={formik.values.strMeasure4}
                    />
                    <input
                        name="strMeasure5"
                        type="text"
                        placeholder="measure"
                        onChange={formik.handleChange}
                        value={formik.values.strMeasure5}
                    />
                    <input
                        name="strMeasure6"
                        type="text"
                        placeholder="measure"
                        onChange={formik.handleChange}
                        value={formik.values.strMeasure6}
                    />
                    <input
                        name="strMeasure7"
                        type="text"
                        placeholder="measure"
                        onChange={formik.handleChange}
                        value={formik.values.strMeasure7}
                    />
                    <input
                        name="strMeasure8"
                        type="text"
                        placeholder="measure"
                        onChange={formik.handleChange}
                        value={formik.values.strMeasure8}
                    />
                    <input
                        name="strMeasure9"
                        type="text"
                        placeholder="measure"
                        onChange={formik.handleChange}
                        value={formik.values.strMeasure9}
                    />
                    <input
                        name="strMeasure10"
                        type="text"
                        placeholder="measure"
                        onChange={formik.handleChange}
                        value={formik.values.strMeasure10}
                    />
                    
                </div>
                {errorMsg && <div>{errorMsg}</div>}
                <button type="submit">Update</button>
            </form>
        </div>
    ) : (
        <div className="link-home">
          <button className="link-home">
            <Link to="/">Home</Link>
          </button>
        </div>
    )
}