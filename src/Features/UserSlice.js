import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  value: {
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    skills: "",
  },
};

// console.log(initialState);
export const UserSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    UserValues: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { UserValues } = UserSlice.actions;
export default UserSlice.reducer;
