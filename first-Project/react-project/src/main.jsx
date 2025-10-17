import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// router 컴포넌트 생성 후 라우트프로바이더 컴포넌트로 생성한 router를 속성값으로 받기
import { RouterProvider } from "react-router-dom";
import router from "./router/index.js";
// react redux사용을 위한 저장소 설정
import { store } from "./store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
