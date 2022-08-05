import { createSlice } from "@reduxjs/toolkit";

const initialState = { origin: null, destination: null, travelTimeInfo: null };

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin(state, action) {
      state.origin === action.payload.origin;
    },
    setDestination(state, action) {
      state.destination === action.payload.destination;
    },
    setTravelTimeInfo(state, action) {
      state.travelTimeInfo === action.payload.travelTimeInfo;
    },
  },
});

export const { setTravelTimeInfo, setDestination, setOrigin } =
  navSlice.actions;

export default navSlice.reducer;
