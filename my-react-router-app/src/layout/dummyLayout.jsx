import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PATHS from "../constants/paths";

export default function dummyLayout() {
  return (
    <div>
      <Link to={PATHS.ROOT.INDEX}>rootlayout</Link>
      <div className="flex gap-2">
        <Link className="border-2 cursor-pointer text-red-300" to="cart">
          Carts
        </Link>
        <Link className="border-2 cursor-pointer text-red-300" to="posts">
          Posts
        </Link>
        <Link className="border-2 cursor-pointer text-red-300" to="products">
          Products
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
