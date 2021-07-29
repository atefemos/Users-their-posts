import React from "react";
import "../sass/main.scss";

const Posts = ({ onClick, ...props }) => {
  return (
    <button className="box" onClick={onClick}>
      {props.children}
    </button>
  );
};

export default Posts;
