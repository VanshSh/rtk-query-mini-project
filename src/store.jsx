import { configureStore } from "@reduxjs/toolkit";
import { fakeDataAPI } from "./assets/services/FakeDataAPI";

export const store = configureStore({
  // only this part seems little confusing
  reducer: {
    [fakeDataAPI.reducerPath]: fakeDataAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeDataAPI.middleware),
});
