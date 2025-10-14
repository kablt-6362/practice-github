import PATHS from "../../constants/paths";
import dummyLayout from "../../layout/dummyLayout";
import Carts from "../../pages/DummyPages/Carts";
import Posts from "../../pages/DummyPages/Posts";
import Products from "../../pages/DummyPages/Products";
import ProductDetail from "../../pages/DummyPages/ProductDetail";
import PostDetail from "../../pages/DummyPages/PostDetail";

const dummyRoutes = [
  {
    path: PATHS.DUMMY.INDEX,
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
        path: PATHS.DUMMY.POSTS_DETAIL,
        Component: PostDetail,
      },
      {
        path: PATHS.DUMMY.PRODUCT_DETAIL,
        Component: ProductDetail,
      },
    ],
  },
];

export default dummyRoutes;
