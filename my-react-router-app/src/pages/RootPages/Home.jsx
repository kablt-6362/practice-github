import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>홈페이지</h1>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/posts">posts</Link>
      <br />
      <Link to="/carts">carts</Link>
      <br />
      <Link to="/Products">products</Link>
    </div>
  );
}
