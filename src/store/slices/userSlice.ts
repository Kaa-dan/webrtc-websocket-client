import { User } from "@/lib/schemas";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  currentUser: User | null;
  isLoading: boolean;
}
let initialState: UserState = {
  currentUser: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    clearUser: (state) => {
      state.currentUser = null;
      state.isLoading = false;
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});
export const { setUser, clearUser, setUserLoading } = userSlice.actions;
export default userSlice.reducer;
