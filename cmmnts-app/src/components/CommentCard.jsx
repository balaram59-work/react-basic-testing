import React from "react";

function CommentCard(props) {
  return (
    <div>
      <p>{props.comment}</p>
      <p>{props.name}</p>
    </div>
  );
}

export default CommentCard;
