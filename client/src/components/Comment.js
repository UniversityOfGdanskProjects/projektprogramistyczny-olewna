import Axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCommentAction } from "../actions/commentActions.js";
import { useCocktail } from "../context/CocktailsProvider.js";

export default function Comment(props) {
  const dispatch = useDispatch();
  const { logged } = useCocktail();

  function updated(id, content) {
    dispatch(updateCommentAction({ id: id, content: content }));
  }

  const [updateValue, setUpdateValue] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setUpdateValue(value);
  }

  const handleClick = async (event) => {
    const response = await Axios.patch("/api/comments/" + props.comment.id, {
      content: updateValue,
    })
      .then((res) => console.log("axios patch success"))
      .catch((err) => console.error(err.response));
    event.preventDefault();
    updated(props.comment.id, updateValue);
    setUpdateValue("");
  };

  return (
    <div className="my-3 border rounded p-3">
      <h3>{props.comment.name}</h3>
      <h5 className="fw-light">{props.comment.content}</h5>
      {logged.type === "admin" ? (
        <div>
          <input
            name="content"
            type="text"
            placeholder="Update comment"
            onChange={handleChange}
            value={updateValue}
            className="form-control my-3"
          />
          {updateValue.length > 0 ? (
            <button className="btn btn-light my-3" onClick={handleClick}>
              Update comment
            </button>
          ) : null}
        </div>
      ) : null}
      {logged.nickname === props.comment.name || logged.type === "admin" ? (
        <button className="btn btn-secondary" onClick={props.deleted}>
          Delete
        </button>
      ) : null}
    </div>
  );
}
