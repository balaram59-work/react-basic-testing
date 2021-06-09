import React from "react";
import CommentCard from "./CommentCard";
function CommentList(props) {
  let comments = props.comments;
  return (
    <div>
      {comments.map((comment) => (
        <CommentCard key={comment.id} {...comment} />
      ))}
    </div>
  );
}

export default CommentList;
