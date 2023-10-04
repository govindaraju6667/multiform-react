import { configureStore } from "@reduxjs/toolkit";
import UserSlicer from "./Features/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserSlicer,
  },
});
