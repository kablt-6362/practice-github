import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Thunk는 비동기처리할 함수 생성과 비동기처리 로직
// Slice는 THunk에따른 객체 state변화 적용?

const userData = {
  token: null,
  error: null,
  isSignupSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: userData,
  reducers: {
    resetSignupSuccess: (state) => {
      state.isSignupSuccess = false;
    },
    //
  },
  extraReducers: (builder) => {
    builder;
  },
});

export default authSlice.reducer;
export const { resetSignupSuccess } = authSlice.actions;
