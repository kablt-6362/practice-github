import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../pasges/Home";
import Login from "../pasges/Login";
import SignUp from "../pasges/SignUp";
import MemoCreat from "../pasges/MemoCreat";
import MemoTitle from "../pasges/MemoTitle";
import PATHS from "../Path/paths";

const router = createBrowserRouter([
  {
    path: PATHS.INDEX,
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: PATHS.LOGIN,
        Component: Login,
      },
      {
        path: PATHS.SIGNUP,
        Component: SignUp,
      },
      {
        path: PATHS.MEMOCREAT,
        Component: MemoCreat,
      },
      {
        path: PATHS.MEMOTITLE,
        Component: MemoTitle,
      },
    ],
  },
]);

export default router;
