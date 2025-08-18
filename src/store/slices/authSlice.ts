import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ token: string }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.isLoading = false;
      Cookies.set("auth_token", action.payload.token, { expires: 7 });
    },
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.isLoading = false;
      Cookies.remove("auth_token");
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    initializeAuth: (state) => {
      const token = Cookies.get("auth_token");
      if (token) {
        state.isAuthenticated = true;
        state.token = token;
      }
      state.isLoading = false;
    },
  },
});

export const { setAuth, clearAuth, setLoading, initializeAuth } =
  authSlice.actions;

export default authSlice.reducer;
