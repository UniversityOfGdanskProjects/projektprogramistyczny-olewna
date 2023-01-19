import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm.js';
import CommentList from './CommentList.js';
import BarChart from './BarChart.js';
import { Stars } from './Stars.js';
import { useFormik } from 'formik';
import { deleteDrinkAction } from '../actions/drinkActions.js';
import { useCocktail } from '../context/CocktailsProvider.js';
import axios from 'axios';

export function CocktailList() {
  const drinksList = useSelector((state) => state.drinks);
  const dispatch = useDispatch();
  const [searching, setSearching] = useState(null)
  const { logged } = useCocktail();

  useEffect(() => {
    setSearching(drinksList)
  },[drinksList])

  const handleDelete = async (id) => {
    const response = await axios
      .delete('/api/cocktails/'+id)
      .then(res => console.log('axios delete success'))
      .catch(err => console.error(err.response))
    dispatch(deleteDrinkAction(id))
  }

  const drinkList =
    searching !== null ? (
      searching.map((x) => (
        <div className="drink" key={x.idDrink}>
          <img src={x.strDrinkThumb} className="drink-img" />
          <div className="drink-info">
            <div>{x.strDrink}</div>
            <div>{x.strAlcoholic}</div>
            <Stars rating={x.rating} id={x.idDrink} />

            <button>
              <Link to={`${x.idDrink}`}>Details</Link>
            </button>
            {logged.type==='admin' ? <button onClick={()=>handleDelete(x.idDrink)}>🗑️</button> : null}
          </div>
        </div>
      ))
    ) : (
      <h3>No results :(</h3>
    );

  const formik = useFormik({
    initialValues: {
      name:"",
    },
    onSubmit: (values) => {
      values.name !== "" ? setSearching(drinksList.filter((drink) => drink.strDrink.toLowerCase().includes(values.name.toLowerCase()))) : setSearching(drinksList)
    }
  })

  return (
    <div className='home'>
      <div className='left-side'>
        <form className="search-input" onSubmit={formik.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Search cocktails..."
            value={formik.values.name}
            onChange={formik.handleChange}
            />
            <button type="submit">Search</button>
        </form>
        {drinksList !== null ? (
          <div className="chart">
            <BarChart drinks={searching} />
          </div>
        ) : null}
          {drinksList !== null ? (
            <div className="comment-users">
              <CommentForm />
              <CommentList />
            </div>
          ) : null}
      </div>
      <div>
        <div className="drink-list">{drinkList}</div>
        <button><Link to="add">Add new drink</Link></button>
      </div>
    </div>
  );
}
