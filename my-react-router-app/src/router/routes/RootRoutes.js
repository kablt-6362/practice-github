import PATHS from "../../constants/paths";
import RootLayout from "../../layout/RootLayout";
import Home from "../../pages/RootPages/Home";

const rootRoutes = [
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
];

export default rootRoutes;
