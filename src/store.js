import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice";
import tripReducer from "./tripSlice/tripSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    trip: tripReducer,
  },
});

export default store;
