import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../Features/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});
