import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const router = useNavigate();
  console.log(router);
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div className="">{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
          Open Post
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>
          Delete Post
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
