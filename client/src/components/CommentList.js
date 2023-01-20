import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCommentAction } from '../actions/commentActions.js';
import Comment from './Comment.js';

export default function CommentList() {
  const commentList = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const deleteComment = async (id) => {
    const response = await axios
      .delete('/api/comments/'+id)
      .then(res => console.log('axios delete success'))
      .catch(err => console.error(err.response))
    dispatch(deleteCommentAction(id));

  }

  const commentListed = commentList.map((el) => (
    <Comment
      key={el.id}
      id={el.id}
      comment={el}
      deleted={() => deleteComment(el.id)}
    />
  ));

  return <div className="list">{commentListed}</div>;
}
