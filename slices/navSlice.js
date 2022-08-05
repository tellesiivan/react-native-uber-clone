import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInfo: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfo: (state, action) => {
      state.travelTimeInfo = action.payload;
    },
  },
});

export const { setTravelTimeInfo, setDestination, setOrigin } =
  navSlice.actions;

// selectors
const selectOrigin = (state) => state.nav.origin;
const selectDestination = (state) => state.nav.destination;
const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;

export { selectOrigin, selectDestination, selectTravelTimeInfo };

export default navSlice.reducer;
