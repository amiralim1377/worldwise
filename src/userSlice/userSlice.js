import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: [],
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user.push(action.payload);
      state.isAuthenticated = false;
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload || {};
      console.log(email);
      console.log(password);
      console.log(action.payload);
      const user = state.user.find(
        (user) => user.email === email && user.password === password
      );
      console.log(user);
      if (user) {
        state.isAuthenticated = true;
        state.currentUser = user;
      } else {
        state.isAuthenticated = false;
        console.warn("Invalid email or password");
      }
    },
    logoutUser(state) {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
