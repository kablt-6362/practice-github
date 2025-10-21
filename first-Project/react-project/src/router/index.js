import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../pasges/Home";
import Login from "../pasges/Login";
import SignUp from "../pasges/SignUp";
import MemoCreat from "../pasges/MemoCreat";
import PATHS from "../Path/paths";
//memolist,memotitle 추가
import MemoTitle from "../pasges/MemoTitle";
import MemoAll from "../components/MemoAll";
import MemoComplete from "../components/MemoComplete";
import MemoInComplete from "../components/MemoInComplete";

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
        children: [
          {
            path: PATHS.MEMO_ALL,
            Component: MemoAll,
          },
          {
            path: PATHS.MEMO_COMPLETE,
            Component: MemoComplete,
          },
          {
            path: PATHS.MEMO_INCOMPLETE,
            Component: MemoInComplete,
          },
        ],
      },
    ],
  },
]);

export default router;
