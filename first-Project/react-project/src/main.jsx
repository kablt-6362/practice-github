import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// router 컴포넌트 생성 후 라우트프로바이더 컴포넌트로 생성한 router를 속성값으로 받기
import { RouterProvider } from "react-router-dom";
import router from "./router/index.js";
// react redux사용을 위한 저장소 설정
import { store } from "./store";
// 새로고침해도 사용자 정보 보관하기 위한 persistStore사용
import { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* PersisGate의 속성 loading,persistor에 대해 알아보기(저 태그의 고정 속성인가? 어떤것들을 받는것인가?) */}
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
