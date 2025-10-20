import React from "react";
import { useSelector } from "react-redux";

export default function MemoTitle() {
  const memotitle = useSelector((state) => state.auth.memotitle);
  return (
    <div>
      MemoTitle:
      {memotitle.map((ele) => {
        return <li>{ele.content}</li>;
      })}
    </div>
  );
}
