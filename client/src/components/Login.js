import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useCocktail } from '../context/CocktailsProvider.js';

export default function Login() {
    const users = useSelector((state) => state.users);
    const [errorMsg, setErrorMsg] = useState(null)
    const {logged, setLogged } = useCocktail();

    const validate = (values) => {
        const errors = {};
        if (!values.nickname) {
            errors.nickname = "Required"
        }

        if (!values.password) {
        errors.password = 'Required';
        }

        return errors;
    };

  const formik = useFormik({
    initialValues: {
      nickname: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
        const acc = users.filter((user) => user.name===values.nickname && user.password===values.password)
        if (acc.length===1) {
            setErrorMsg(null)
            setLogged({
                nickname: acc[0].name,
                type: acc[0].type,
            })
        } else setErrorMsg("Nieprawidłowe dane ")
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="nickname-log">Nickname: </label>
      <input
        id="nickname-log"
        name="nickname"
        type="text"
        placeholder="Your nickname"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      
      <label htmlFor="password-log">Password: </label>
      <input
        id="password-log"
        name="password"
        type="password"
        placeholder="Your password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      {errorMsg}
      <button type="submit">Sign up</button>
    </form>
  );
}
