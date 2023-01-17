import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCommentAction } from '../actions/commentActions.js';
import Comment from './Comment.js';

export default function CommentList() {
  const commentList = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  function deleteComment(id) {
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
