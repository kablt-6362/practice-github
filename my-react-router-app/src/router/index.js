import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/DummyPages/Products.jsx";
import Carts from "../pages/DummyPages/Carts.jsx";
import Posts from "../pages/DummyPages/Posts.jsx";
import ProductDetail from "../pages/DummyPages/ProductDetail.jsx";
import PostDetail from "../pages/DummyPages/PostDetail.jsx";
import { Component } from "react";
import dummyLayout from "../layout/dummyLayout.jsx";
import PATHS from "../constants/paths.js";
import NotFound from "../pages/NotFound.jsx";

// router모듈화
import RootRoutes from "../router/routes/RootRoutes.js";
import DummyRoutes from "../router/routes/DummyRoutes.js";

const router = createBrowserRouter([
  ...RootRoutes,
  ...DummyRoutes,
  // {
  //   path: "*",
  //   Component: NotFound,
  // },
]);

export default router;
