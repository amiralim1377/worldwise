import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alltrip: [],
  isAddedTrip: false,
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    addTrip(state, action) {
      state.alltrip.push(action.payload);
      state.isAddedTrip = true;
    },
  },
});

export const { addTrip } = tripSlice.actions;

export default tripSlice.reducer;
