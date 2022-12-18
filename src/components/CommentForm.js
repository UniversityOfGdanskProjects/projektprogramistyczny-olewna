import { useFormik } from 'formik';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addCommentAction } from '../actions/commentActions.js';

export default function CommentForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      user: 'Guest',
      name: '',
      id: uuidv4(),
    },
    onSubmit: (values) => {
      dispatch(addCommentAction(values));
      formik.resetForm({
        values: {
          user: 'Guest',
          name: '',
          id: uuidv4(),
        },
      });
    },
  });

  return (
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
        <div className="comment">
          <input
            name="user"
            placeholder="WRITE YOUR NAME"
            value={formik.values.user}
            required
            onChange={formik.handleChange}
          />
          <input
            name="name"
            placeholder="WRITE COMMENT"
            value={formik.values.name}
            required
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">ADD COMMENT</button>
      </form>
    </div>
  );
}
