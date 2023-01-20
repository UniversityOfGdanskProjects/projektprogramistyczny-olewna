import Axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCommentAction } from '../actions/commentActions.js';
import { useCocktail } from '../context/CocktailsProvider.js';

export default function Comment(props) {
  const dispatch = useDispatch();
  const { logged } = useCocktail();

  function updated(id, content) {
    dispatch(updateCommentAction({ id: id, content: content }));
  }

  const [updateValue, setUpdateValue] = useState('');

  function handleChange(event) {
    const { value } = event.target;
    setUpdateValue(value);
  }

  const handleClick = async (event) => {
    const response = await Axios
      .patch('/api/comments/'+props.comment.id,{content:updateValue})
      .then(res => console.log('axios patch success'))
      .catch(err => console.error(err.response))
    event.preventDefault();
    updated(props.comment.id, updateValue);
    setUpdateValue('');
  }

  return (
    <div className="full-comment">
      <div className="coms">
        <h2>{props.comment.name}</h2>
        <h2>{props.comment.content}</h2>
      </div>
      {logged.type === 'admin' ? (
        <div>
          <div>
            <input
              name="content"
              type="text"
              placeholder="Update comment"
              onChange={handleChange}
              value={updateValue}
            />
            {updateValue.length > 0 ? (
              <button onClick={handleClick}>Update comment</button>
            ) : null}
          </div>
        </div>
      ) : null}
      {logged.nickname===props.comment.name || logged.type==="admin" ? <button onClick={props.deleted}>Delete</button> : null}
    </div>
  );
}
