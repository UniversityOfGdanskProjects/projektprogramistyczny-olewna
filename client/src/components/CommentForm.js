import { useFormik } from 'formik';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addCommentAction } from '../actions/commentActions.js';
import { useCocktail } from '../context/CocktailsProvider.js';
import axios from 'axios'

export default function CommentForm() {
  const { logged } = useCocktail();
  const dispatch = useDispatch();

  const nicknaming = (nick) => {
    if (nick === '') return 'Guest';
    else return nick;
  };

  const [errorMsg, setErrorMsg] = useState(null)
    
  const fetching = async (val) => {
      const response = await axios
          .post('/api/comments',val)
          .then((res) => {
              console.log('axios post success')
          })
          .catch((err) => {
              setErrorMsg(err)
          })
  }

  const formik = useFormik({
    initialValues: {
      name: nicknaming(logged.nickname),
      content: '',
      id: uuidv4(),
    },
    onSubmit: (values) => {
      dispatch(addCommentAction(values));
      fetching(values)
      setErrorMsg(null)
      formik.resetForm({
        values: {
          name: nicknaming(logged.nickname),
          content: '',
          id: uuidv4(),
        },
      });
    },
  });

  return (
    <div className="form-comments">
      <form onSubmit={formik.handleSubmit}>
        <div className="comments">
          <div className="comment">
            {logged.type === '' ? (
              <input
                name="name"
                placeholder="WRITE YOUR NAME"
                value={formik.values.name}
                required
                onChange={formik.handleChange}
              />
            ) : (
              <div>{logged.nickname}</div>
            )}
            <input
              name="content"
              placeholder="WRITE COMMENT"
              value={formik.values.content}
              required
              onChange={formik.handleChange}
            />
          </div>
          <div>{errorMsg}</div>
          <button className="button-submit" type="submit">
            ADD COMMENT
          </button>
        </div>
      </form>
    </div>
  );
}
