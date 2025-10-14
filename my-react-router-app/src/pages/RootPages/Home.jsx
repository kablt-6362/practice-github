import React from "react";
import { Link } from "react-router-dom";
import PATHS from "../../constants/paths";

export default function Home() {
  return (
    <div>
      <h1>홈페이지</h1>
      <br />
      <Link to={PATHS.ROOT.INDEX}>Home</Link>
      <br />
      <Link to={PATHS.DUMMY.POST}>posts</Link>
      <br />
      <Link to={PATHS.DUMMY.CART}>carts</Link>
      <br />
      <Link to={PATHS.DUMMY.PRODUCTS}>products</Link>
    </div>
  );
}
