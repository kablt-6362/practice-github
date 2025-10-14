// 경로 문자열을 관리 상수 객체

const PATHS = {
  // rootlayout의 중첩된 경로
  ROOT: {
    // RootLayout의 기본(진입) 경로
    INDEX: "/",
  },
  DUMMY: {
    INDEX: "/dummy",
    CART: "/dummy/cart",
    POST: "/dummy/posts",
    PRODUCTS: "/dummy/products",
    PRODUCT_DETAIL: "/dummy/products/:productId",
    getProductsDetail: (productsId) => `products/${productsId}`,
    POSTS_DETAIL: "/dummy/posts/:postId",
    getPostDetail: (postId) => `posts/${postId}`,
  },
};

export default PATHS;
