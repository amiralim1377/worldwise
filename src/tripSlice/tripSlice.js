import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alltrip: [],
  isAddedTrip: false,
  selectedCity: null,
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    addTrip(state, action) {
      state.alltrip.push(action.payload);
      state.isAddedTrip = true;
    },
    deleteTrip(state, action) {
      state.alltrip = state.alltrip.filter(
        (item) => item.id !== action.payload
      );
    },
    setSelectedCity(state, action) {
      state.selectedCity = action.payload;
    },
  },
});

export const { addTrip, deleteTrip, setSelectedCity } = tripSlice.actions;

export default tripSlice.reducer;
