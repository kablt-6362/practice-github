import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/RootPages/Home.jsx";
import Products from "../pages/DummyPages/Products.jsx";
import Carts from "../pages/DummyPages/Carts.jsx";
import Posts from "../pages/DummyPages/Posts.jsx";
import ProductDetail from "../pages/DummyPages/ProductDetail.jsx";
import PostDetail from "../pages/DummyPages/PostDetail.jsx";
import { Component } from "react";
import RootLayout from "../layout/RootLayout.jsx";
import dummyLayout from "../layout/dummyLayout.jsx";
import PATHS from "../constants/paths.js";

const router = createBrowserRouter([
  {
    path: PATHS.ROOT.INDEX,
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: PATHS.DUMMY.index,
    Component: dummyLayout,
    children: [
      {
        path: "cart",
        Component: Carts,
      },
      {
        path: "posts",
        Component: Posts,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "posts/:postId",
        Component: PostDetail,
      },
      {
        path: "products/:productId",
        Component: ProductDetail,
      },
    ],
  },
]);

export default router;
