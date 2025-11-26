import { createSlice } from "@reduxjs/toolkit";

type User = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role?: string;
  [key: string]: any;
};

const initialState = {
  currentUser: null as User | null,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;