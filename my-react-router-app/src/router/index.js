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
        path: PATHS.DUMMY.CART,
        Component: Carts,
      },
      {
        path: PATHS.DUMMY.POST,
        Component: Posts,
      },
      {
        path: PATHS.DUMMY.PRODUCTS,
        Component: Products,
      },
      {
        path: PATHS.DUMMY.getPostDetail(postId),
        Component: PostDetail,
      },
      {
        path: PATHS.DUMMY.getProductsDetail(productsId),
        Component: ProductDetail,
      },
    ],
  },
]);

export default router;
