import React from "react";
import { Link } from "react-router-dom";

export default function ListPosts({ props }) {
  return (
    <div>
      <div>id:{props.id}</div>
      <div>
        <span>title:{props.title}</span>
        <span>body:{props.body}</span>
        <span>tag:{props.tags}</span>
      </div>
    </div>
  );
}
