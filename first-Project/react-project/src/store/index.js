import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// 오류 수정
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["token"],
};

const persistreducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistreducer, //authReducer대신 persistreducer입력
  },
  //오류 수정 코드 추가
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
//저장소,슬라이스,라우터
