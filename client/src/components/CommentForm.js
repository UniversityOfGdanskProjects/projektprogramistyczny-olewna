import { useFormik } from 'formik';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addCommentAction } from '../actions/commentActions.js';
import { useCocktail } from '../context/CocktailsProvider.js';

export default function CommentForm() {
  const { logged } = useCocktail();
  const dispatch = useDispatch();

  const nicknaming = (nick) => {
    if (nick === '') return 'Guest';
    else return nick;
  };

  const formik = useFormik({
    initialValues: {
      user: nicknaming(logged.nickname),
      name: '',
      id: uuidv4(),
    },
    onSubmit: (values) => {
      dispatch(addCommentAction(values));
      formik.resetForm({
        values: {
          user: nicknaming(logged.nickname),
          name: '',
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
                name="user"
                placeholder="WRITE YOUR NAME"
                value={formik.values.user}
                required
                onChange={formik.handleChange}
              />
            ) : (
              <div>{logged.nickname}</div>
            )}
            <input
              name="name"
              placeholder="WRITE COMMENT"
              value={formik.values.name}
              required
              onChange={formik.handleChange}
            />
          </div>
          <button className="button-submit" type="submit">
            ADD COMMENT
          </button>
        </div>
      </form>
    </div>
  );
}
