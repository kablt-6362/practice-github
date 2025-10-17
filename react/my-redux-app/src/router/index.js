import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CountDecrement from "../pages/CountDecrement";
import CountIncrements from "../pages/CountIncrements";
import CountView from "../pages/CountView";
import StepSet from "../pages/StepSet";
import Rootlayout from "../layouts/RootLayout";
import { Children, Component } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "count-decrement",
        Component: CountDecrement,
      },
      {
        path: "count-increments",
        Component: CountIncrements,
      },
      {
        path: "count-view",
        Component: CountView,
      },
      {
        path: "count-set",
        Component: StepSet,
      },
    ],
  },
]);

export default router;
