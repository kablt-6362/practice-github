import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Thunk는 비동기처리할 함수 생성과 비동기처리 로직
// Slice는 Thunk에따른 객체 state변화 적용?
import axios from "axios";

// 사용할 url,adon key 환경변수에서 불러오기
const SUPABASE_URL = import.meta.env.VITE_SUSPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

//Thunk만들기 signup,login,logout
//signup
const signUp = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        url: `${SUPABASE_URL}/auth/v1/signup`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
        },
        data: {
          email: data.email,
          password: data.password,
        },
      };
      const response = await axios(config);
      return response.data;
      //서버 데이터 POST 요청
    } catch (error) {
      //에러뜨면 에러메세지 리턴
      return rejectWithValue(error.response.data);
    }
  }
);

//login Thunk만들기
const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        url: `${SUPABASE_URL}/auth/v1/token?grant_type=password
        `,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
        },
        data: {
          email: data.email,
          password: data.password,
        },
      };
      // 오류지점--해결(메일링크 확인안함)
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

// 로그아웃
const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue, getState }) => {
    try {
      const config = {
        url: `${SUPABASE_URL}/auth/v1/logout`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${getState().auth.token}`,
        },
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userData = {
  token: null,
  error: null,
  isSignupSuccess: false,
  memotitle: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState: userData,
  reducers: {
    resetSignupSuccess: (state) => {
      state.isSignupSuccess = false;
    },
    addAiResponse: (state, action) => {
      state.memotitle.push({
        id: Date.now(),
        content: action.payload.content,
        dueDate: action.payload.dueDate,
        priority: action.payload.priority,
        category: action.payload.category,
        isCompleted: false,
      });
    },
    clearMemoTitle: (state) => {
      state.memotitle = [];
    },
    toggleMemoCompletion: (state, action) => {
      const memo = state.memotitle.find((memo) => memo.id === action.payload);
      if (memo) {
        memo.isCompleted = !memo.isCompleted;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state) => {
        state.isSignupSuccess = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload["access_token"];
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.token = null;
        // rejectWithValue로 전달된 메시지 확인 (가장 깔끔함)
        if (action.payload) {
          state.error = action.payload;
          console.error("로그아웃 오류 (Payload):", action.payload);
        }
        // payload가 없다면 (rejectWithValue를 사용하지 않았을 때), action.error 확인
        else if (action.error.message) {
          state.error = action.error.message;
          console.error("로그아웃 오류 (Error Message):", action.error.message);
        }
        alert("로그아웃 되었습니다.");
      });
  },
});

export default authSlice.reducer;
export const {
  resetSignupSuccess,
  addAiResponse,
  clearMemoTitle,
  toggleMemoCompletion,
} = authSlice.actions;
export { signUp, login, logout };
